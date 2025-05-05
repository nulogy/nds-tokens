type ZIndex =
  | 'content'
  | 'tabsScrollIndicator'
  | 'tabsBar'
  | 'overlay'
  | 'aboveOverlay'
  | 'tableHeader'
  | 'modalHeaderAndFooter'
  | 'openControl'
  | 'navBar'
  | 'sidebar'

export default () =>
  ({
    modalHeaderAndFooter: 2,
    tableHeader: 10,
    content: 100,
    tabsScrollIndicator: 200,
    tabsBar: 210,
    navBar: 900,
    sidebar: 800,
    overlay: 1000,
    openControl: 1000,
    aboveOverlay: 1010,
  }) satisfies Record<ZIndex, number>
