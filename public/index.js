const doctype = document.implementation.createDocumentType('html', '', '');
const html = document.createElement('html');
html.setAttribute('lang', 'en');

const head = document.createElement('head');

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'utf-8');
head.appendChild(metaCharset);

const linkIcon = document.createElement('link');
linkIcon.setAttribute('rel', 'icon');
linkIcon.setAttribute('href', '%PUBLIC_URL%/favicon.ico');
head.appendChild(linkIcon);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
head.appendChild(metaViewport);

const metaThemeColor = document.createElement('meta');
metaThemeColor.setAttribute('name', 'theme-color');
metaThemeColor.setAttribute('content', '#000000');
head.appendChild(metaThemeColor);

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', 'Web site created using create-react-app');
head.appendChild(metaDescription);

const linkAppleTouchIcon = document.createElement('link');
linkAppleTouchIcon.setAttribute('rel', 'apple-touch-icon');
linkAppleTouchIcon.setAttribute('href', '%PUBLIC_URL%/logo192.png');
head.appendChild(linkAppleTouchIcon);

const linkManifest = document.createElement('link');
linkManifest.setAttribute('rel', 'manifest');
linkManifest.setAttribute('href', '%PUBLIC_URL%/manifest.json');
head.appendChild(linkManifest);

const title = document.createElement('title');
title.textContent = 'React App';
head.appendChild(title);

const body = document.createElement('body');

const noscript = document.createElement('noscript');
noscript.textContent = 'You need to enable JavaScript to run this app.';
body.appendChild(noscript);

const divRoot = document.createElement('div');
divRoot.setAttribute('id', 'root');
body.appendChild(divRoot);

document.appendChild(doctype);
document.appendChild(html);
html.appendChild(head);
html.appendChild(body);
