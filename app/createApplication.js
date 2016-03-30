export default function (document) {
  var application = document.createElement('section')
  application.id = 'application'

  document.body.appendChild(application)
  
  return application
}