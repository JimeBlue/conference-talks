const defaults = {
  ring: 'ring-1 ring-inset focus:ring-inset',
  padding: {
    sm: 'px-4 py-4 group-has-[label]/floating:pt-6',
  },
  height: 'h-5',
  size: 'size-4',
}

const inputDefinition = {
  padding: {
    sm: defaults.padding.sm,
  },
  color: {
    white: {
      outline: `${defaults.ring} !shadow-none`,
    },
  },
  variant: {
    outline: `bg-white ${defaults.ring} !shadow-none`,

  },
}

const floatingLabel = `
  group-has-[label]/floating:z-10 group-has-[label]/floating:pointer-events-none group-has-[label]/floating:absolute group-has-[label]/floating:left-2 group-has-[label]/floating:top-1
  group-has-[label]/floating:translate-y-1 group-has-[label]/floating:bg-white group-has-[label]/floating:px-2 group-has-[label]/floating:text-xs group-has-[label]/floating:text-gray-500 group-has-[label]/floating:transition-all
  group-has-[:placeholder-shown:not(:focus-visible)]/floating:translate-y-1/2 group-has-[:placeholder-shown:not(:focus-visible)]/floating:text-base
  group-has-[:focus-visible:not(:placeholder-shown)]/floating:translate-y-1 group-has-[:focus-visible:not(:placeholder-shown)]/floating:text-xs
  group-data-[selected="false"]/floating:translate-y-1/2 group-data-[selected="false"]/floating:text-base
  group-has-[[data-headlessui-state=open]]/floating:!translate-y-1 group-has-[[data-headlessui-state=open]]/floating:!text-xs
  `

export default defineAppConfig({
  ui: {
    primary: 'brand',
    gray: 'cool',
    error: 'ring-8',
    icons: {
      dynamic: true,
    },
    alert: {
      rounded: 'rounded',
    },
    badge: {
      size: {
        xs: 'text-[10px] px-2 py-0.5',
      },
    },
    button: {
      color: {
        gray: {
          shadow: 'shadow-none',
        },
        lightBlue: {
          ghost: 'text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
      },
      variant: {
        outline: 'ring-1',
      },
      default: {
        size: 'xl',
      },
    },
    buttonGroup: {
      shadow: 'shadow-none',
    },
    formGroup: {
      wrapper: 'relative',
      container: 'group-has-[label]/floating:mt-0',
      label: { base: `text-primary-500 ${floatingLabel} flex items-center order-1`, required: 'group-has-[label]/floating:after:text-current' },
      description: 'mt-1 text-gray-800',

    },
    input: inputDefinition,
    textarea: inputDefinition,
    select: { ...inputDefinition },
    selectMenu: {
      input: `${defaults.padding.sm}`,
      color: inputDefinition.color,
      variant: inputDefinition.variant,
    },
    checkbox: {
      container: defaults.height,
      base: defaults.size,
    },
    radio: {
      container: defaults.height,
      base: defaults.size,
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    breadcrumb: {
      wrapper: 'mb-8',
      divider: 'i-heroicons-chevron-right',
    },
    tooltip: {
      wrapper: 'relative inline-flex',
      container: 'z-20 group',
      width: 'w-auto max-w-full',
      background: 'bg-white dark:bg-gray-900',
      color: 'text-gray-900 dark:text-white',
      shadow: 'shadow',
      rounded: 'rounded',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      base: '[@media(pointer:coarse)]:hidden h-auto px-2 py-1 text-xs font-normal relative whitespace-normal', // Add 'whitespace-normal' for text wrapping
      shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
      middot: 'mx-1 text-gray-700 dark:text-gray-200',
      transition: {
        enterActiveClass: 'transition ease-out duration-200',
        enterFromClass: 'opacity-0 translate-y-1',
        enterToClass: 'opacity-100 translate-y-0',
        leaveActiveClass: 'transition ease-in duration-150',
        leaveFromClass: 'opacity-100 translate-y-0',
        leaveToClass: 'opacity-0 translate-y-1',
      },
      popper: {
        strategy: 'fixed',
      },
      default: {
        openDelay: 0,
        closeDelay: 0,
      },
      arrow: {
        base: '[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
        ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
        rounded: 'before:rounded-sm',
        background: 'before:bg-gray-200 dark:before:bg-gray-800',
        shadow: 'before:shadow',
        placement: 'group-data-[popper-placement*=\'right\']:-left-1 group-data-[popper-placement*=\'left\']:-right-1 group-data-[popper-placement*=\'top\']:-bottom-1 group-data-[popper-placement*=\'bottom\']:-top-1',
      },
    },

  },
})
