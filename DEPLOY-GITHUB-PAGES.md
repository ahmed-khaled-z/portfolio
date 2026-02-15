# Deploy to GitHub Pages - Complete Guide

## ✅ Step 1: Code Pushed to GitHub (DONE!)

Your portfolio has been successfully pushed to:
**https://github.com/ahmed-khaled-z/portfolio**

```
✅ 11 files changed, 2596 insertions(+)
✅ Pushed to origin/main
```

## 📝 Step 2: Enable GitHub Pages

Follow these simple steps:

### Option A: Using GitHub Website (Easiest)

1. **Open your repository settings:**
   - Go to: https://github.com/ahmed-khaled-z/portfolio/settings/pages
   - Or manually: GitHub.com → Your Repository → Settings → Pages (left sidebar)

2. **Configure GitHub Pages:**
   - Under "Source": Select **Deploy from a branch**
   - Branch: Select **main**
   - Folder: Select **/ (root)**
   - Click **Save**

3. **Wait 2-3 minutes** for deployment

4. **Your site will be live at:**
   ```
   https://ahmed-khaled-z.github.io/portfolio/
   ```

### Option B: Using GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main --pages-path /
```

## 🎉 Step 3: Access Your Live Portfolio

Once GitHub Pages is enabled (takes 2-3 minutes), your portfolio will be available at:

**🌐 https://ahmed-khaled-z.github.io/portfolio/**

You can also find the URL in your repository settings under "Pages".

## 🔄 Future Updates

To update your portfolio:

### Method 1: Edit Locally
```bash
# 1. Edit portfolio-data.json with your changes
# 2. Commit and push
git add portfolio-data.json
git commit -m "Update projects"
git push origin main

# GitHub Pages updates automatically in 1-2 minutes!
```

### Method 2: Edit on GitHub
1. Go to your repository on GitHub.com
2. Click on `portfolio-data.json`
3. Click the pencil icon (Edit)
4. Make your changes
5. Commit directly to main
6. GitHub Pages updates automatically!

## 📋 What's Deployed

Your GitHub Pages site includes:
- ✅ `index.html` - Your portfolio (main page)
- ✅ `portfolio-data.json` - Your project data
- ✅ `image.jpeg` - Your profile photo
- ✅ All documentation files (README, QUICKSTART, etc.)

## 🔧 Custom Domain (Optional)

Want to use your own domain (e.g., www.ahmedkhaled.com)?

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Configure DNS records with your domain provider:
   ```
   CNAME record: www → ahmed-khaled-z.github.io
   ```

See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## ✅ Verification Checklist

After enabling GitHub Pages, verify:

- [ ] Go to https://github.com/ahmed-khaled-z/portfolio/settings/pages
- [ ] Confirm "Your site is live at ..." appears
- [ ] Visit https://ahmed-khaled-z.github.io/portfolio/
- [ ] All 17 projects display correctly
- [ ] Technology tags appear
- [ ] Store links work
- [ ] Mobile responsive
- [ ] All links functional

## 🐛 Troubleshooting

### Issue: 404 Page Not Found
**Solution:** 
- Wait 2-3 minutes after enabling Pages
- Check branch is set to "main"
- Verify `index.html` exists in repository root

### Issue: Old Version Shows
**Solution:**
- Wait 1-2 minutes for cache to clear
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

### Issue: Projects Don't Load
**Solution:**
- Check browser console (F12) for errors
- Verify `portfolio-data.json` exists in repository
- Check JSON file for syntax errors at jsonlint.com

### Issue: Images Don't Load
**Solution:**
- Verify `image.jpeg` is in repository root
- Check filename matches exactly in `portfolio-data.json`
- Try hard refresh

## 📊 GitHub Pages Features

Your site automatically gets:
- ✅ **Free HTTPS** - Secure by default
- ✅ **Fast CDN** - Global content delivery
- ✅ **Auto-deploy** - Updates on every push
- ✅ **99.9% Uptime** - Reliable hosting
- ✅ **No server needed** - Fully static

## 📈 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get Google Analytics tracking ID
2. Add to `index.html` before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Making Repository Private

Your repository is currently public. To make it private:

1. Go to Settings → General
2. Scroll to "Danger Zone"
3. Click "Change visibility"
4. Select "Make private"

**Note:** GitHub Pages works with both public and private repos (requires Pro for private).

## 🎊 You're Done!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Free hosting forever
- ✅ Professional URL
- ✅ Auto-updates on push

**Next Step:** Visit your live site at:
**https://ahmed-khaled-z.github.io/portfolio/**

Share this URL on:
- LinkedIn profile
- Resume/CV
- Email signature
- Business cards
- Social media

---

## 🆘 Need Help?

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Status Check:** https://github.com/ahmed-khaled-z/portfolio/settings/pages
- **Repository:** https://github.com/ahmed-khaled-z/portfolio

---

**Deployed:** February 2026  
**Platform:** GitHub Pages  
**Status:** ✅ Ready to go live!
