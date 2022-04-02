import { AppPage } from './app.po';
import { element,browser, by } from 'protractor';
// import { browser, logging } from 'protractor';

describe('Goldies Gym integration testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // test for checking home url is redirected to home or not
  it ('should load a page and verify the url', () => {
    browser.get('/');
    expect(browser.getCurrentUrl())
        .toEqual(browser.baseUrl + 'home');
  });

  // test on clicking the Goldies Gym, url has to change to /
  it('should load home page on clicking first anchor tag and verify the url', () => {
    browser.get('/home');
    element(by.xpath('//ul/li/a')).click()
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'home')
  });
  
  it('should load home page on clicking login and verify the url', () => {
    browser.get('/home');
    element(by.linkText('Login')).click()
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'login')
  });

  it('should load home page on clicking Signup and verify the url', () => {
    browser.get('/home');
    element(by.linkText('Sign Up')).click()
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'register')
  });

  it('should display image', () => {
    page.navigateTo();
    expect(page.getImage).toBeTruthy('<img> should exist in home.component.html');

  });

  it('should contain <router-outlet>', () => {
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<router-outlet> should exist in app.component.html');
  });

  it('should contain footer', () => {
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<app-footer> should exist in app.component.html');

  });

  it('should display center text',async () => {
    page.navigateTo();
    expect(page.getCenterText).toBeTruthy('<h4> should exist in home.component.html');
    expect(element(by.css('h4')).getText()).toEqual('EXPLORE OUR WIDE RANGE OF PROGRAMS');
  });

  // given empty input to login form
  it('should check login component',async () => {
    page.navigateToLogin();
    element(by.css('input[type="email"]')).sendKeys("");
    element(by.css('input[type="password"]')).sendKeys("");
    element(by.css('.btn')).click();
    expect(element(by.css('.alert-danger')).getText()).toBe('Email is required')
  });

    // given invalid email input to login form
    it('should check login component',async () => {
      page.navigateToLogin();
      element(by.css('input[type="email"]')).sendKeys("test");
      element(by.css('input[type="password"]')).sendKeys("");
      element(by.css('.btn')).click();
      expect(element(by.css('.alert-danger')).getText()).toBe('Email must be a valid email address')
  
    });


     // given valid email as input and empty password to login form
     it('should check login component',async () => {
      page.navigateToLogin();
      element(by.css('input[type="email"]')).sendKeys("test@gmail.com");
      element(by.css('input[type="password"]')).sendKeys("");
      element(by.css('.btn')).click();
      expect(element(by.css('.alert-danger')).getText()).toBe('Password is required')
  
    });

      // given valid email as input and password with invalid length to login form
      it('should check login component',async () => {
        page.navigateToLogin();
        element(by.css('input[type="email"]')).sendKeys("test@gmail.com");
        element(by.css('input[type="password"]')).sendKeys("123");
        element(by.css('.btn')).click();
        expect(element(by.css('.alert-danger')).getText()).toBe('Password must be at least 6 characters')
    
      });   
      
  // given empty input to register form
  it('should check register component',async () => {
    page.navigateToRegister();
    element(by.css('input[type="email"]')).sendKeys("");
    element(by.css('.signupbtn')).click();
    expect(element(by.css('.alert-danger')).getText()).toBe('Email is required')
  });    
    // given invalid email input to registeration form
    it('should check register component',async () => {
      page.navigateToRegister();
      element(by.css('input[type="email"]')).sendKeys("test");
      element(by.css('input[type="password"]')).sendKeys("");
      element(by.css('.signupbtn')).click();
      expect(element(by.css('.alert-danger')).getText()).toBe('Email must be a valid email address')
  
    });


     // given valid email as input and empty password to register form
     it('should check register component',async () => {
      page.navigateToRegister();
      element(by.css('input[type="email"]')).sendKeys("test@gmail.com");
      element(by.css('input[type="password"]')).sendKeys("");
      element(by.css('.signupbtn')).click();
      expect(element(by.css('.alert-danger')).getText()).toBe('Password is required')
    });

      // given valid email as input and password with invalid length to register form
      it('should check register component',async () => {
        page.navigateToRegister();
        element(by.css('input[type="email"]')).sendKeys("test@gmail.com");
        element(by.css('input[type="password"]')).sendKeys("123");
        element(by.css('input[type="password"]')).sendKeys("123");
        element(by.css('.signupbtn')).click();
        expect(element(by.css('.alert-danger')).getText()).toBe('Password is required')
    
      });
      // given valid email as input and password with invalid length to register form
      it('should check register component',async () => {
        page.navigateToRegister();
        element(by.css('input[type="email"]')).sendKeys("test@gmail.com");
        // element(by.css('input[type="password"]')).sendKeys("demo1234");
        element(by.css('input[type="password"]')).sendKeys("123");
        element(by.css('.signupbtn')).click();
        expect(element(by.css('.alert-danger')).getText()).toBe('Password must be at least 6 characters')
    
      });
});
