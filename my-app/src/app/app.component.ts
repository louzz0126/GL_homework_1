import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  // constructor(private scrollSpyService: ScrollSpyService) { }

  // ngOnInit(): void {
  //   window.addEventListener('DOMContentLoaded', event => {
  //     const sideNav = document.body.querySelector('#sideNav');
  //     if (sideNav) {
  //         new bootstrap.ScrollSpy(document.body, {
  //             target: '#sideNav',
  //             rootMargin: '0px 0px -40%',
  //         });
  //     };
  //     const navbarToggler = document.body.querySelector('.navbar-toggler');
  //     const responsiveNavItems = [].slice.call(
  //         document.querySelectorAll('#navbarResponsive .nav-link')
  //     );
  //     responsiveNavItems.map(function (responsiveNavItem) {
  //         responsiveNavItem.addEventListener('click', () => {
  //             if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //                 navbarToggler.click();
  //             }
  //         });
  //     });
  //   })
  // }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
