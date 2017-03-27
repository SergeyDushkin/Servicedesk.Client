export class BaseTabPage {

  id: string;
  
  tabs = [];

  activeTab: any;
  prevTab: any;

  init() {
    this.activeTab = this.tabs[0];
    this.prevTab = this.tabs[0];
  }

  setActiveLink(link) {
    this.prevTab = this.activeTab;
    this.activeTab = link;
  }

  handleLoaded(data) {
    console.log('handleLoaded ' + data);
  }

  handleCanceled($event, link) {
    console.log('handleCanceled ' + $event);
    this.removeTab(link);
  }

  handleUpdated($event, link, type) {
    console.log('handleUpdated ' + $event);
    this.removeTab(link);
    //this.refresh[type].next();
  }

  onCreateTab(type, title) {
    this.createTab({ id: type, title: title, type: type });
  }

  removeTab(tab) {
    let idx = this.tabs.findIndex(r => r.id == tab['id']);
    if (idx > -1) {
      this.activeTab = this.prevTab;
      this.tabs.splice(idx, 1);
    }
  }

  createTab(tab) {

    if (!this.tabs.find(r => r.id == tab.id)) {
      this.tabs.push(tab);
    }

    this.setActiveLink(tab);
  }

}
