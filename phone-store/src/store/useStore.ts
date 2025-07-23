import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, User, FilterOptions } from '@/types';

interface StoreState {
  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemsCount: number;

  // User state
  user: User | null;
  setUser: (user: User | null) => void;

  // Product state
  products: Product[];
  setProducts: (products: Product[]) => void;
  filteredProducts: Product[];
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // UI state
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;

  // Wishlist
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      addToCart: (product, quantity = 1) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.product.id === product.id);
        
        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { id: product.id, product, quantity }],
          });
        }
      },
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter((item) => item.product.id !== productId),
        });
      },
      updateCartItemQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        
        set({
          cart: get().cart.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        });
      },
      clearCart: () => set({ cart: [] }),
      get cartTotal() {
        return get().cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      get cartItemsCount() {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },

      // User state
      user: null,
      setUser: (user) => set({ user }),

      // Product state
      products: [],
      setProducts: (products) => set({ products }),
      filteredProducts: [],
      filters: {},
      setFilters: (filters) => {
        set({ filters });
        // Apply filters logic here
        const { products, searchQuery } = get();
        let filtered = [...products];

        // Filter by search query
        if (searchQuery) {
          filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        // Filter by category
        if (filters.category && filters.category !== 'all') {
          filtered = filtered.filter((product) => product.category === filters.category);
        }

        // Filter by brand
        if (filters.brand) {
          filtered = filtered.filter((product) => product.brand === filters.brand);
        }

        // Filter by price range
        if (filters.priceRange) {
          filtered = filtered.filter(
            (product) =>
              product.price >= filters.priceRange![0] &&
              product.price <= filters.priceRange![1]
          );
        }

        // Filter by stock
        if (filters.inStock) {
          filtered = filtered.filter((product) => product.inStock);
        }

        // Sort products
        if (filters.sortBy) {
          switch (filters.sortBy) {
            case 'price-low':
              filtered.sort((a, b) => a.price - b.price);
              break;
            case 'price-high':
              filtered.sort((a, b) => b.price - a.price);
              break;
            case 'rating':
              filtered.sort((a, b) => b.rating - a.rating);
              break;
            case 'newest':
              // Assuming newer products have higher IDs
              filtered.sort((a, b) => b.id.localeCompare(a.id));
              break;
          }
        }

        set({ filteredProducts: filtered });
      },
      searchQuery: '',
      setSearchQuery: (query) => {
        set({ searchQuery: query });
        // Re-apply filters with new search query
        get().setFilters(get().filters);
      },

      // UI state
      isCartOpen: false,
      setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      isMobileMenuOpen: false,
      setIsMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),

      // Wishlist
      wishlist: [],
      addToWishlist: (productId) => {
        const { wishlist } = get();
        if (!wishlist.includes(productId)) {
          set({ wishlist: [...wishlist, productId] });
        }
      },
      removeFromWishlist: (productId) => {
        set({
          wishlist: get().wishlist.filter((id) => id !== productId),
        });
      },
    }),
    {
      name: 'phone-store',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        wishlist: state.wishlist,
      }),
    }
  )
);