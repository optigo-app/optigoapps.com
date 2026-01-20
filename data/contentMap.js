const contentMap = {
  'Jewellery Manufacture': {
    industries: [
      { name: 'Diamond Jewellery Manufacturing', url: '/jewellery-manufacture/industries/diamond-jewellery-manufacturing' },
      { name: 'Gold Jewellery Manufacturing', url: '/jewellery-manufacture/industries/gold-jewellery-manufacturing' },
      { name: 'Handmade Jewellery', url: '/jewellery-manufacture/industries/handmade-jewellery' },
      { name: 'CZ Manufacturing', url: '/jewellery-manufacture/industries/cz-manufacturing' },
      { name: 'Kundan/Jadau Manufacturing', url: '/jewellery-manufacture/industries/kundan-jadau-manufacturing' },
      { name: 'Bangles Manufacturing', url: '/jewellery-manufacture/industries/bangles-manufacturing' },
    ],
    solutions: [
      { name: 'Product Development ', url: '/jewellery-manufacture/solutions/product-development' },
      { name: 'Automate Entry Process', url: '/jewellery-manufacture/solutions/automate-entry-process' },
      { name: 'Real-Time Loss & Recovery Control', url: '/jewellery-manufacture/solutions/real-time-loss-recovery-control' },
      { name: 'Inventory Tracking', url: '/jewellery-manufacture/solutions/inventory-tracking' },
      { name: 'Product Making Guide for workers', url: '/jewellery-manufacture/solutions/product-making-guide-for-workers' },
      { name: 'AI Based Stock Search', url: '/jewellery-manufacture/solutions/ai-based-stock-search' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-manufacture/features/inventory-management' },
      { name: 'Production process & Loss Management', url: '/jewellery-manufacture/features/production-process-loss-management' },
      { name: 'Orders & Repair Management', url: '/jewellery-manufacture/features/orders-repair-management' },
      { name: 'Accounts & Payments', url: '/jewellery-manufacture/features/accounts-payments' },
      { name: 'Sales & billing', url: '/jewellery-manufacture/features/sales-billing' },
      { name: 'Analytics & Dashboards', url: '/jewellery-manufacture/features/analytics-dashboards' },
    ],
    promos: [
      {
        title: 'B2B E-Commerce',
        description: 'Empower your business with seamless digital commerce.',
        buttonText: 'Explore B2B Solutions →'
      },
      {
        title: 'SCAVU Data Exchange',
        description: 'Seamlessly connect and exchange data across systems.',
        buttonText: 'Discover SCAVU Exchange →'
      }
    ],
    links: {
      // industries: { label: 'All industries →', url: '/jewellery-manufacture/industries/all-industries' },
      // solutions: { label: 'All solutions →', url: '/solutions' },
      features: { label: 'All features →', url: '/jewellery-manufacture/features/all-features' },
    }
  },

  'Wholesale': {
    industries: [
      { name: 'Jewellery Distributors', url: '/jewellery-wholesale/industries/jewellery-distributors' },
      { name: 'Domestic/International Wholesalers', url: '/jewellery-wholesale/industries/domestic-international-wholesalers' },
      { name: 'Multi-Branch Wholesalers', url: '/jewellery-wholesale/industries/multi-branch-wholesalers' },
    ],
    solutions: [
      { name: 'Vendor Management', url: '/jewellery-wholesale/solutions/vendor-management' },
      { name: 'Order & Re-Order Management', url: '/jewellery-wholesale/solutions/order-reorder-management' },
      { name: 'Real-Time Pricing Control', url: '/jewellery-wholesale/solutions/real-time-pricing-control' },
      { name: 'Multi-Branch & Cloud Sync', url: '/jewellery-wholesale/solutions/multi-branch-cloud-sync' },
      { name: 'Repair Management', url: '/jewellery-wholesale/solutions/repair-management' },
      { name: 'Advance Analytical Reports', url: '/jewellery-wholesale/solutions/advance-analytical-reports' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-wholesale/features/inventory-management' },
      { name: 'Sales & Billing with scanning', url: '/jewellery-wholesale/features/sales-billing-scanning' },
      { name: 'Approval Memo & Reconciliation', url: '/jewellery-wholesale/features/approval-memo-reconciliation' },
      { name: 'Accounts & Payments', url: '/jewellery-wholesale/features/accounts-payments' },
      { name: 'Customer Relationship Management (CRM)', url: '/jewellery-wholesale/features/customer-relationship-management-crm' },
    ],
    promos: [
      {
        title: 'B2B E-Commerce',
        description: 'Empower your wholesale business with seamless digital commerce.',
        buttonText: 'Explore B2B Solutions →'
      },
      {
        title: 'SCAVU Data Exchange',
        description: 'Seamlessly connect and exchange data across systems.',
        buttonText: 'Discover SCAVU Exchange →'
      }
    ],
    links: {
      // industries: { label: 'All industries →', url: '/jewellery-wholesale/industries/all-industries' },
      // solutions: { label: 'All solutions →', url: '/solutions' },
      features: { label: 'All features →', url: '/jewellery-wholesale/features/all-features' },
    }
  },

  'Jewellery Retail': {
    industries: [
      { name: 'Jewellery Retail Stores', url: '/jewellery-retail/industries/jewellery-retail-stores' },
      { name: 'Multi-Location Chains', url: '/jewellery-retail/industries/multi-location-chains' },
      { name: 'Franchise Showrooms', url: '/jewellery-retail/industries/franchise-showrooms' },
      { name: 'Boutique Jewellery Brands', url: '/jewellery-retail/industries/boutique-jewellery-brands' },
    ],
    solutions: [
      { name: 'POS Billing & Barcode Scanning', url: '/jewellery-retail/solutions/pos-billing-barcode-scanning' },
      { name: 'Orders & Vendor Management', url: '/jewellery-retail/solutions/orders-vendor-management' },
      { name: 'Repair & Old Gold Management', url: '/jewellery-retail/solutions/repair-old-gold-management' },
      { name: 'Business Analytics', url: '/jewellery-retail/solutions/business-analytics' },
      { name: 'Schemes & Loyalty Programm', url: '/jewellery-retail/solutions/schemes-loyalty-programm' },
    ],
    features: [
      { name: 'Inventory Management', url: '/jewellery-retail/features/inventory-management' },
      { name: 'Customer Relationship Management (CRM)', url: '/jewellery-retail/features/customer-relationship-management-crm' },
      { name: 'Accounts & Payments', url: '/jewellery-retail/features/accounts-payments' },
      { name: 'Sales & Billing with Scanning', url: '/jewellery-retail/features/sales-billing-scanning' },
      { name: 'Approval Memo & Reconciliation', url: '/jewellery-retail/features/approval-memo-reconciliation' },
    ],
    promos: [
      {
        title: 'Smart POS & Billing',
        description: 'Speed up your retail operations with barcode-enabled POS, approval memos, and seamless billing.',
        buttonText: 'Explore POS Features →'
      },
      {
        title: 'Retail ERP with CRM & Analytics',
        description: 'Manage inventory, customer relationships, and branches with real-time insights and cloud sync.',
        buttonText: 'Discover Retail ERP →'
      }
    ],

    links: {
      // industries: { label: 'All industries →', url: '/jewellery-retail/industries/all-industries' },
      // solutions: { label: 'All solutions →', url: '/solutions' },
      features: { label: 'All features →', url: '/jewellery-retail/features/all-features' },
    }
  },

  'Apps & Ecommerce': {
    industries: [
      { name: 'Jewellery Manufacturing', url: '/apps-and-ecommerce/industries/jewellery-manufacturing' },
      { name: 'Jewellery Wholesalers', url: '/apps-and-ecommerce/industries/jewellery-wholesalers' },
      { name: 'Jewellery Retailers', url: '/apps-and-ecommerce/industries/jewellery-retailers' },
    ],
    solutions: [
      { name: 'Real time Connected B2B Ecommerce', url: '/apps-and-ecommerce/E-commerce/real-time-connected-b2b-ecommerce' },
      { name: 'Real time Connected B2C Ecommerce', url: '/apps-and-ecommerce/E-commerce/real-time-connected-b2c-ecommerce' },
      { name: 'Omnichannel Ecommerce', url: '/apps-and-ecommerce/E-commerce/omnichannel-ecommerce' },
    ],
    features: [
      { name: 'Sales Team Mobile App (Optigo Express)', url: '/apps-and-ecommerce/apps/sales-team-mobile-app' },
      { name: 'Exhibition & Sales team tablet App (Icatalog)', url: '/apps-and-ecommerce/apps/exhibition-and-sales-team-tablet-app' },
      { name: 'B2B & B2C Catalog Sharing (ProCatalog)', url: '/apps-and-ecommerce/apps/b2b-and-b2c-catalog-sharing' },
      { name: 'Show Room App (EVO)', url: '/apps-and-ecommerce/apps/show-room-app' },
      { name: 'Showroom Advertising App (Sinage App)', url: '/apps-and-ecommerce/apps/showroom-advertising-app' },
      { name: 'Vendor Customer integrations (SCAVU)', url: '/apps-and-ecommerce/apps/vendor-customer-integrations' },
      { name: 'Management App', url: '/apps-and-ecommerce/apps/management-app' },
      { name: 'Sales Representative App', url: '/apps-and-ecommerce/apps/sales-representative-app' },
      { name: 'B2b Customer APP', url: '/apps-and-ecommerce/apps/b2b-customer-app' },
      { name: 'B2c Customer APP', url: '/apps-and-ecommerce/apps/b2c-customer-app' },
    ],
    promos: [
      {
        title: 'Omnichannel Jewellery Commerce',
        description: 'Unify your B2B, B2C, and showroom experiences with real-time connected apps and eCommerce solutions.',
        buttonText: 'See Omnichannel in Action →'
      },
      {
        title: 'Sales & Showroom Apps',
        description: 'Equip your teams with powerful tools like Optigo Express, Icatalog, EVO, and more.',
        buttonText: 'Explore Sales Solutions →'
      }
    ],
    links: {}
  },

  'About Us': {
    industries: [
      {
        title: 'Platform',
        description: 'Discover our platform that powers innovation and seamless digital experiences.',
        url: '/platform'
      },
    ],
    solutions: [
      {
        title: 'Blog',
        description: 'Read insights, updates, and stories from our team and industry experts.',
        url: '/blog'
      },
    ],
    features: [
      {
        title: 'Career',
        description: 'Join our team and grow your career with exciting opportunities.',
        url: '/career'
      },
    ],
  }

};