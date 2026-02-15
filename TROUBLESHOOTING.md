# Troubleshooting Guide - Projects Not Showing

## 🚨 Problem: Projects Don't Show Up

If you see a "Projects Not Loading" error or the projects section is empty, this is because browsers block loading local JSON files when you open HTML files directly (using `file://` protocol) for security reasons (CORS policy).

## ✅ Solution: Use a Local Web Server

### Option 1: Double-Click start-server.bat (Easiest)

1. Double-click `start-server.bat` in your portfolio folder
2. Your browser should open automatically to `http://localhost:8000`
3. If not, manually open: **http://localhost:8000**
4. To stop: Press `Ctrl+C` in the command window

### Option 2: Manual Python Server

Open Command Prompt or PowerShell in your portfolio folder:

```bash
# Python 3 (Recommended)
python -m http.server 8000

# OR Python 2
python -m SimpleHTTPServer 8000

# OR using py launcher
py -m http.server 8000
```

Then open: **http://localhost:8000** in your browser

### Option 3: Node.js Server (If you have Node.js)

```bash
# One-time install
npm install -g http-server

# Run server
http-server

# OR use npx (no install needed)
npx http-server
```

### Option 4: VS Code Live Server

If you use VS Code:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 5: PHP Server (If you have PHP)

```bash
php -S localhost:8000
```

## 🌐 Deploy to Avoid This Issue

Once deployed to a real server, this issue goes away. See QUICKSTART.md for deployment options:

- **GitHub Pages** (Free, Easy)
- **Netlify** (Free, Drag & Drop)
- **Vercel** (Free, One-Click)

## 🔍 Verify the Issue

Open your browser's console (Press F12) and check for errors:

**Common Error Messages:**
```
Access to fetch at 'file:///...' has been blocked by CORS policy
Failed to load resource: net::ERR_FAILED
```

**This confirms** you need to use a local server as described above.

## ✅ How to Know It's Working

When working correctly, you should see:
- ✅ 17 project cards displayed
- ✅ Each project has description
- ✅ Technology tags visible
- ✅ Store links (Play Store/App Store) on projects that have them
- ✅ No errors in browser console (F12)

## 📝 Quick Checklist

Before troubleshooting, verify:
- [ ] `portfolio-data.json` exists in the same folder as `index.html`
- [ ] File is named exactly `portfolio-data.json` (case-sensitive)
- [ ] JSON file is valid (check at jsonlint.com)
- [ ] You're using a local server (not opening file:// directly)

## 🆘 Still Not Working?

### Check JSON File
```bash
# Open Command Prompt in portfolio folder
python -c "import json; json.load(open('portfolio-data.json')); print('JSON is valid!')"
```

If you get an error, your JSON file might be corrupted. 

### Check File Location
Make sure these files are in the SAME folder:
```
portfolio/
├── index.html
├── portfolio-data.json  ← Must be here
├── image.jpeg
└── start-server.bat
```

### Browser Cache
Clear your browser cache:
- Chrome/Edge: `Ctrl + Shift + Delete`
- Firefox: `Ctrl + Shift + Delete`
- Or use Incognito/Private mode

### Try Different Browser
- Chrome
- Firefox  
- Edge
- Safari

## 📱 Testing on Your Phone

1. Make sure phone and computer are on same WiFi
2. Find your computer's IP address:
   ```bash
   # Windows
   ipconfig
   # Look for IPv4 Address (usually 192.168.x.x)
   ```
3. Start server on computer
4. On phone, open: `http://192.168.x.x:8000`
   (Replace x.x with your actual IP)

## 💡 Understanding CORS

**Why does this happen?**

Browsers block loading local files from HTML pages opened via `file://` protocol to prevent malicious websites from reading files on your computer. This is a security feature, not a bug.

**The fix:**
Run a local web server so the browser loads via `http://` protocol instead of `file://`, which is allowed.

## 🚀 Recommended Workflow

**For Development:**
```bash
# Start server
python -m http.server 8000

# Open browser to
http://localhost:8000

# Edit files and refresh browser to see changes
```

**For Production:**
Deploy to GitHub Pages, Netlify, or Vercel (see QUICKSTART.md)

## 📞 Need More Help?

1. Check browser console (F12) for specific error messages
2. Verify portfolio-data.json is valid at jsonlint.com
3. Make sure you're using a local server, not opening file directly
4. Check QUICKSTART.md for detailed setup instructions
5. Check README.md for architecture details

---

**Quick Command Reference:**

```bash
# Start server (Python 3)
python -m http.server 8000

# Open browser
http://localhost:8000

# Stop server
Ctrl + C
```

**Remember:** Once you deploy to a real hosting service, you won't need a local server anymore!
