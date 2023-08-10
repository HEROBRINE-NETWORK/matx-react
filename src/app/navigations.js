export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' }
    ]
  },
  { label: 'Options', type: 'label' },
  {
    name: 'Options',
    icon: 'favorite',
    badge: { value: '4', color: 'secondary' },
    children: [
      { name: 'Create Server', path: '/material/dialog', iconText: 'D' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Updates', path: '/material/table', iconText: 'T' }
    ]
  },
  {
    name: 'Panel',
    icon: 'launch',
    type: 'extLink',
    path: 'https://discord.gg/multiverse-development-964013065140043786'
  }
];
