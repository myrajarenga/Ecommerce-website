'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'ordering', name: 'Ordering & Payment' },
    { id: 'shipping', name: 'Shipping & Delivery' },
    { id: 'products', name: 'Products & Warranty' },
    { id: 'returns', name: 'Returns & Exchanges' },
    { id: 'account', name: 'Account & Support' }
  ];

  const faqs = [
    // Ordering & Payment
    {
      id: 1,
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including M-Pesa, Visa/Mastercard credit and debit cards, and bank transfers. All payments are processed securely through our encrypted payment gateway to ensure your financial information is protected.'
    },
    {
      id: 2,
      category: 'ordering',
      question: 'Is it safe to shop online with PhoneHub?',
      answer: 'Absolutely! We use industry-standard SSL encryption to protect your personal and financial information. Our website is secured with advanced security measures, and we never store your payment card details on our servers.'
    },
    {
      id: 3,
      category: 'ordering',
      question: 'Can I modify or cancel my order after placing it?',
      answer: 'Orders can be modified or cancelled within 30 minutes of placement. After this time, orders enter our processing system and cannot be changed. Please contact our customer service immediately if you need to make changes.'
    },
    {
      id: 4,
      category: 'ordering',
      question: 'Do you offer installment payments?',
      answer: 'Yes, we offer flexible installment payment options for purchases over KSh 20,000. You can choose from 3, 6, or 12-month payment plans with competitive interest rates. Contact our sales team for more details.'
    },

    // Shipping & Delivery
    {
      id: 5,
      category: 'shipping',
      question: 'What are your delivery options and costs?',
      answer: 'We offer same-day delivery within Nairobi (KSh 500), next-day delivery to major cities (KSh 800), and 2-3 business days countrywide delivery (KSh 1,200). Free delivery is available for orders over KSh 50,000.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via SMS and email. You can track your package in real-time using our order tracking system on the website or by calling our customer service.'
    },
    {
      id: 7,
      category: 'shipping',
      question: 'What if I\'m not available during delivery?',
      answer: 'Our delivery team will attempt delivery twice. If you\'re not available, they\'ll leave a delivery notice with instructions. You can also arrange for someone else to receive the package or reschedule delivery for a convenient time.'
    },
    {
      id: 8,
      category: 'shipping',
      question: 'Do you deliver to P.O. Box addresses?',
      answer: 'Unfortunately, we cannot deliver to P.O. Box addresses due to security reasons. We require a physical address where someone can receive the package. We do offer pickup from our partner locations in major towns.'
    },

    // Products & Warranty
    {
      id: 9,
      category: 'products',
      question: 'Are all products genuine and original?',
      answer: 'Yes, 100% of our products are genuine and sourced directly from authorized distributors and manufacturers. Every product comes with official warranty and we provide certificates of authenticity where applicable.'
    },
    {
      id: 10,
      category: 'products',
      question: 'What warranty do you provide on phones and accessories?',
      answer: 'Smartphones come with 12-month manufacturer warranty, accessories have 6-month warranty, and chargers/cables have 3-month warranty. The warranty covers manufacturing defects but not physical damage or water damage.'
    },
    {
      id: 11,
      category: 'products',
      question: 'Do you sell refurbished or second-hand phones?',
      answer: 'No, we only sell brand new, unopened products. All our phones are factory sealed and come with original packaging, accessories, and manufacturer warranty. We clearly label any demo or display units.'
    },
    {
      id: 12,
      category: 'products',
      question: 'Can you help me choose the right phone for my needs?',
      answer: 'Absolutely! Our product experts are available via WhatsApp, phone, or email to help you choose the perfect device based on your budget, usage patterns, and preferences. We provide personalized recommendations.'
    },

    // Returns & Exchanges
    {
      id: 13,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused products in original packaging with all accessories. The product must be in pristine condition with no signs of use. Return shipping costs are covered by the customer unless the product is defective.'
    },
    {
      id: 14,
      category: 'returns',
      question: 'How do I initiate a return or exchange?',
      answer: 'Contact our customer service team with your order number and reason for return. We\'ll provide you with a return authorization and instructions. You can return the item to our office or arrange for pickup (additional charges may apply).'
    },
    {
      id: 15,
      category: 'returns',
      question: 'How long does it take to process refunds?',
      answer: 'Once we receive and inspect the returned item, refunds are processed within 3-5 business days. M-Pesa refunds are instant, while card refunds may take 7-14 business days depending on your bank.'
    },
    {
      id: 16,
      category: 'returns',
      question: 'Can I exchange a product for a different model?',
      answer: 'Yes, exchanges are possible within 7 days of purchase for products in original condition. You\'ll pay the price difference if upgrading or receive store credit if downgrading. Some restrictions apply for special offers.'
    },

    // Account & Support
    {
      id: 17,
      category: 'account',
      question: 'Do I need to create an account to shop?',
      answer: 'While you can shop as a guest, creating an account allows you to track orders, save favorite products, access exclusive deals, and enjoy faster checkout. Account creation is free and takes less than a minute.'
    },
    {
      id: 18,
      category: 'account',
      question: 'How can I contact customer support?',
      answer: 'You can reach us via WhatsApp (+254 700 000 000), email (support@phonehub.co.ke), phone, or through our contact form. Our support team is available Monday-Friday 8AM-8PM, and weekends 9AM-6PM.'
    },
    {
      id: 19,
      category: 'account',
      question: 'Do you have a physical store I can visit?',
      answer: 'Currently, we operate online only, but we have plans to open physical stores in major cities. You can visit our partner locations for product pickup or schedule an appointment to view products at our Nairobi office.'
    },
    {
      id: 20,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes. If you don\'t receive the email, check your spam folder or contact our support team.'
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about our products, services, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No questions found matching your search.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {expandedItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}