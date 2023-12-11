const fs = require('fs');

fs.copyFile('./pages/CNAME', './docs/CNAME', () => {
    console.log('Copied CNAME')
})
fs.copyFile('./pages/.nojekyll', './docs/.nojekyll', () => {
    console.log('Copied .nojekyll')
})

