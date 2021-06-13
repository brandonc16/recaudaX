export class Menu {
  constructor() {}
  public static menu(user: any) {
    const headingMain = {
      text: '',
      heading: true,
    };

    const Users = {
      text: 'Usuarios',
      icon: 'fa fa-users',
      link: '/people',
    };
    const admin = {
      text: 'Informacion',
      icon: 'fas fa-info-circle',
      link: '/admin',
    };
    const overview = {
      text: 'Overview',
      icon: 'fas fa-chart-line',
      link: '/login',
    };

    const transactions = {
      text: 'Transacciones',
      icon: 'fas fa-dollar-sign',
      link: '/login',
    };
    const subscriptions = {
      text: 'Suscripciones',
      icon: 'fa fa-vector-square',
      link: '/login',
    };
    const card = {
      text: 'Tarjetas',
      icon: 'fa fa-credit-card',
      link: '/login',
    };
    const interactions = {
      text: 'Interacciones',
      icon: 'far fa-comment-dots',
      link: '/login',
    };
    return [
      headingMain,
      overview,
      admin,
      transactions,
      subscriptions,
      Users,
      card,
      interactions,
    ];
  }
}
