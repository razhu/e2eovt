// 1020343027	usuario29	123456

module.exports = {
    "Ingresar a OVT" : function (client) {
      const urlBase = 'https://test.agetic.gob.bo/mintrabajo/#/';
      const login = 'loginRoe'
      const pm = 'planilla_mensual'
      const nit = '1020343027';
      const usuario = 'usuario29';
      const contrasena = '123456';
      client
        .url(urlBase+login)
        .click('button[id="md-btn-confirm-selected-ok"]')
        .setValue('input[name="nit"]', nit)
        .setValue('input[name="usuario"]', usuario)
        .setValue('input[name="contrasena"]', contrasena)
        .click('button[type=submit]')
        .click('button[type=submit]')
        .waitForElementVisible('body', 2000)
        // .url(urlBase+pm)
        .useXpath() // 
        .pause(1*1000)
        .click('//i[text()="menu"]')
        .click('//*[@id="tour-menu"]/li[2]/button') // planillas
        .pause(1*1000)
        .click("/html/body/div[2]/section/app-sidenav/md-sidenav/ul/li[2]/ul/li[1]/a/span[text()='Mensual']") // //*[@id="tour-menu"]/li[2]/ul/li[1]/a/span
        .pause(1*1000)
        .click('//i[text()="menu"]')
        .click('//*[@id="container-main"]/div/div/md-card/md-card-content/md-card/md-card-content/md-icon') // 
        .useCss()
        .end()
      },
  
      // "Navegar hasta el organigrama de la entidad" : function (client) {
      // client
      //   .click('img[src="img/svg/nosotros_c.svg"]')
      //   .pause(1000)
      //   .waitForElementVisible('img[src="img/svg/organigrama_c.svg"]',1000)
      //   .click('img[src="img/svg/organigrama_c.svg"]')
      //   .end()
      // }
  
  };
  