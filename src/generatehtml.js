// function renderEmployeeInfo(profile) {
//   fs.readFile('data.csv', 'utf8', (error, data) =>
//     error ? console.error(error) : console.log(data)
//   );
//   return `<h2 ${renderEmployeeInfo(data.profile)}`
// }

// function renderEngineerInfo(profile) {
//   fs.readFile('data.csv', 'utf8', (error, data) =>
//     error ? console.error(error) : console.log(data)
//   );
//   return `<h2 ${renderEngineerInfo(data.profile)}`
// }

// function renderManagerInfo(profile) {
//   fs.readFile('data.csv', 'utf8', (error, data) =>
//     error ? console.error(error) : console.log(data)
//   );
//   return `<h2 ${renderManagerInfo(data.profile)}`
// }

// function renderInternInfo(profile) {
//   fs.readFile('data.csv', 'utf8', (error, data) =>
//     error ? console.error(error) : console.log(data)
//   );
//   return `<h2 ${renderInternInfo(data.profile)}`
// }



function generatehtml(data) {
  return `# ${data.title}
  ${renderEmployeeInfo(data.profile)}
  
  ## Name
  ${data.name}
  ## Id
  ${data.id}
  ## Email
  ${data.Email}
  ## OfficeNumber
  ${data.officenumber}
  ## Github
  ${data.github}
  ## School
  ${data.school}

//   ${renderEngineerInfo(data.profile)}
//   ${renderManagerInfo(data.profile)}
//   ${renderInternInfo(data.profile)}
  
//   `;
}

module.exports = generatehtml;