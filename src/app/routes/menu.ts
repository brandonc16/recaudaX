export class Menu {
  constructor() {}
  public static menu(user: any) {
    const headingMain = {
      text: '',
      heading: true,
    };

    const Usuarios = {
      text: 'Usuarios',
      icon: 'fa fa-list',
      link: '/people',
    };
    const admin = {
      text: 'Administrador',
      icon: 'fa fa-list',
      link: '/admin',
    };
    return [headingMain, Usuarios, admin];
  }
}
