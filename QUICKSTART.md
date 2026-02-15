# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Verify Files

Make sure you have these files in your portfolio folder:

```
portfolio/
├── index.html              ✅ Main HTML file
├── portfolio-data.json     ✅ Your data file
├── image.jpeg             ✅ Your profile photo
├── README.md              ✅ Documentation
├── IMPROVEMENTS.md        ✅ Changes summary
└── QUICKSTART.md          ✅ This guide
```

### 2. Open Locally

**Option A**: Double-click `index.html`
- Opens directly in your default browser
- No server needed for basic testing

**Option B**: Use a local server (recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### 3. Test the Website

Check these features:
- ✅ Profile photo loads
- ✅ Navigation works (scroll to sections)
- ✅ Mobile menu works (click hamburger icon)
- ✅ Projects load from JSON
- ✅ Technology tags appear
- ✅ Store links show up (for projects that have them)
- ✅ Hover effects work
- ✅ Responsive on mobile (resize browser)

## 📝 How to Update Your Content

### Adding a New Project

1. Open `portfolio-data.json`
2. Find the `"projects"` array
3. Copy an existing project object
4. Paste and modify with your details:

```json
{
  "name": "YOUR PROJECT NAME",
  "company": "Your Company",
  "year": "2024",
  "description": "Write a detailed description explaining what this project does, who it's for, and what makes it special. Include key features and technologies used.",
  "shortDescription": "Brief one-liner about the project",
  "technologies": ["Flutter", "Firebase", "Node.js", "etc"],
  "playStore": "https://play.google.com/store/apps/details?id=your.app.id",
  "appStore": "https://apps.apple.com/app/your-app/id123456",
  "icon": "Y"
}
```

**Note**: If your project isn't on Play Store or App Store, use `null`:
```json
"playStore": null,
"appStore": null
```

### Updating Personal Info

Edit the `personal` section in `portfolio-data.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "description": "Your professional summary",
    "location": "Your City, Country",
    "phone": "+1 234 567 8900",
    "email": "your.email@example.com"
  }
}
```

### Adding Experience

Add to the `experience` array:

```json
{
  "title": "Senior Developer",
  "company": "Tech Company",
  "type": "FULL-TIME - REMOTE",
  "period": "Jan 2024 - Present"
}
```

### Adding Skills

Add to the `skills` array:

```json
{
  "category": "Your Category",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Updating Social Links

Edit the `social` section:

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "medium": "https://medium.com/@yourusername",
    "wakatime": "https://wakatime.com/@yourusername"
  }
}
```

## 🌐 Deploying to the Web

### GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Upload all files (including `portfolio-data.json`)
3. Go to Settings → Pages
4. Select branch: `main`, folder: `/ (root)`
5. Save and wait 2-3 minutes
6. Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag your portfolio folder into Netlify
4. Done! You get a URL like: `your-portfolio.netlify.app`

### Vercel (For Developers)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Click Deploy
5. Live in seconds at: `your-portfolio.vercel.app`

### Traditional Hosting (cPanel, FTP)

1. Login to your hosting control panel
2. Use File Manager or FTP client
3. Upload all files to `public_html` or `www` folder
4. Access via your domain: `https://yourdomain.com`

## 🔧 Troubleshooting

### Projects Don't Show Up

**Problem**: Projects section is empty

**Solutions**:
1. Check browser console (F12) for errors
2. Verify `portfolio-data.json` is in the same folder as `index.html`
3. Validate JSON syntax at [jsonlint.com](https://jsonlint.com)
4. Check file is named exactly `portfolio-data.json` (case-sensitive)
5. If using local file:// protocol, some browsers block JSON loading. Use a local server instead.

### Images Don't Load

**Problem**: Profile photo not showing

**Solutions**:
1. Verify `image.jpeg` exists in the same folder
2. Check file name matches exactly (case-sensitive)
3. Update filename in `portfolio-data.json` if using different image name
4. Ensure image format is supported (JPEG, PNG, WebP)

### Store Links Don't Appear

**Problem**: Play Store / App Store buttons missing

**Solutions**:
1. Verify URLs are not `null` in JSON
2. Check URLs are valid and properly formatted
3. Ensure URLs are in quotes: `"https://..."`
4. Both can be `null` if project isn't on stores

### Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open

**Solutions**:
1. Check browser console for JavaScript errors
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Try different browser
4. Ensure JavaScript is enabled

### Styles Look Broken

**Problem**: Website looks unstyled

**Solutions**:
1. Check internet connection (Tailwind CSS loads from CDN)
2. Try refreshing the page
3. Disable ad blockers (they may block CDN)
4. Check browser console for network errors

## 📱 Testing on Mobile

### Using Your Phone

**Option 1: Same WiFi Network**
1. Find your computer's local IP (usually 192.168.x.x)
2. Run local server on computer
3. On phone, open browser and go to: `http://192.168.x.x:8000`

**Option 2: Deploy First**
Deploy to Netlify/Vercel (free), then test the live URL on your phone

### Browser DevTools (Desktop)

1. Press F12 to open DevTools
2. Click device icon (or Ctrl+Shift+M)
3. Select phone model from dropdown
4. Test responsiveness

## 🎨 Customizing Design

### Changing Colors

The site uses purple/pink gradients. To change:

1. Search for color values in `index.html`:
   - `purple-400`, `purple-500`, `purple-600`
   - `pink-400`, `pink-500`, `pink-600`

2. Replace with your preferred Tailwind colors:
   - Blue: `blue-400`, `blue-500`, etc.
   - Green: `green-400`, `green-500`, etc.
   - Red: `red-400`, `red-500`, etc.

### Changing Fonts

The site uses system fonts. To change:

1. Find the `<style>` section in `index.html`
2. Add at the top:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
}
```

## 📊 Performance Tips

### Optimize Images

1. Use [tinypng.com](https://tinypng.com) to compress `image.jpeg`
2. Recommended size: 500x500 pixels (max 1MB)
3. Use WebP format for better compression

### Minimize JSON

1. Remove extra whitespace from `portfolio-data.json` for production
2. Use tools like [jsonformatter.org](https://jsonformatter.org) to minify

### CDN Considerations

Tailwind CSS loads from CDN. For faster loading:
- Consider downloading and hosting locally
- Or use Tailwind's production build

## ✅ Pre-Deployment Checklist

Before going live, verify:

- [ ] All personal information is updated in JSON
- [ ] Profile photo is optimized and loads correctly
- [ ] All projects have descriptions
- [ ] Store links are correct (if applicable)
- [ ] Social media links work
- [ ] Email link works (check for typos)
- [ ] Phone number is correct
- [ ] Tested on mobile device
- [ ] Tested on different browsers
- [ ] No console errors
- [ ] All links open in new tabs (external)
- [ ] Grammar and spelling checked

## 🆘 Need Help?

### Check These First:

1. **README.md** - Architecture and structure
2. **IMPROVEMENTS.md** - All features explained
3. Browser Console (F12) - Check for errors
4. Validate JSON - Use [jsonlint.com](https://jsonlint.com)

### Common Questions:

**Q: Can I add more projects?**  
A: Yes! Just add more objects to the `projects` array in JSON.

**Q: Can I change the order of projects?**  
A: Yes! Reorder the objects in the `projects` array.

**Q: Do I need Node.js or any build tools?**  
A: No! This is pure HTML/CSS/JavaScript. Just upload and go.

**Q: Can I use my own domain?**  
A: Yes! Point your domain to your hosting provider's nameservers.

**Q: Is it mobile-friendly?**  
A: Yes! The site is fully responsive and mobile-optimized.

**Q: Can I add a blog?**  
A: The architecture supports it! You'd need to add a blog section to the JSON and create a renderer for it.

## 🎉 You're Ready!

Your portfolio is now:
- ✅ Fully functional
- ✅ Easy to update
- ✅ Ready to deploy
- ✅ Mobile optimized
- ✅ Professional quality

**Next Steps**:
1. Update `portfolio-data.json` with your information
2. Test locally
3. Deploy to the web
4. Share your portfolio URL!

---

**Questions?** Check the README.md or browser console for errors.  
**Ready to Deploy?** See the "Deploying to the Web" section above!
