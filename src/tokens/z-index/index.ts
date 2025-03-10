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
    content: 100,
    tabsScrollIndicator: 200,
    tabsBar: 210,
    overlay: 1000,
    aboveOverlay: 1010,
    tableHeader: 10,
    modalHeaderAndFooter: 2,
    openControl: 1000,
    navBar: 900,
    sidebar: 800,
  }) satisfies Record<ZIndex, number>
