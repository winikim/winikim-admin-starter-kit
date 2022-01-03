interface ISettings {
    title: string // Overrides the default title
    showTagsView: boolean // Controls tagsview display
    showSidebarLogo: boolean // Controls siderbar logo display
    fixedHeader: boolean // If true, will fix the header component
    sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
  }

// You can customize below settings :)
const settings: ISettings = {
  title: 'Winikim Admin',
  showTagsView: true,
  fixedHeader: true,
  showSidebarLogo: true,
  sidebarTextTheme: true
}

export default settings
