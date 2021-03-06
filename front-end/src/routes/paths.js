// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_HEALTH = '/health';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  landing: '/landing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_HEALTH = {
  root: ROOTS_HEALTH,
  form_o: {
    root: path(ROOTS_HEALTH, '/form_o'),
    form_o_doc: path(ROOTS_HEALTH, '/form_o/form_o_doc'),
    health_exam: path(ROOTS_HEALTH, '/form_o/health_exam'),
  },  
  visit: {
    root: path(ROOTS_HEALTH, '/visit'),
  },
  history: {
    root: path(ROOTS_HEALTH, '/history'),
    healthhistory:path(ROOTS_HEALTH, '/history/reece-chung/profile'),
  },
  checkup: {
    root: path(ROOTS_HEALTH, '/checkup'),
    form_p_doc: path(ROOTS_HEALTH, '/checkup/formp'),
    note: path(ROOTS_HEALTH, '/checkup/reece-chung/note'),
  },
  education: {
    root: path(ROOTS_HEALTH, '/education'),
  }
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
    schedule: path(ROOTS_DASHBOARD, '/app/schedule'),
    notification: path(ROOTS_DASHBOARD, '/app/notification')    
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all')
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey')
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, '/user/account')
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    productById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    editById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post')
  },
  employee: {
    root: path(ROOTS_DASHBOARD, '/employee'),
    profile: path(ROOTS_DASHBOARD, '/employee/profile'),
    list: path(ROOTS_DASHBOARD, '/employee/list'),
    newEmployee: path(ROOTS_DASHBOARD, '/employee/new'),
    editById: path(ROOTS_DASHBOARD, `/employee/reece-chung/edit`)
  },
  health: {
    root: path(ROOTS_DASHBOARD, '/health'),
  },  
  safety: {
    root: path(ROOTS_DASHBOARD, '/safety'),
  },
  security: {
    root: path(ROOTS_DASHBOARD, '/security'),
  },
  report: {
    root: path(ROOTS_DASHBOARD, '/report'),
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
