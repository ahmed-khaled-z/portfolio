# How to Update Your Portfolio

## ✅ Works Offline - No Server Needed!

Your portfolio now has data embedded directly in the HTML file, so it works when you double-click `index.html` - **no server required!**

## 📝 How to Update Projects

Since the data is now embedded in the HTML file, you have two options:

### Option 1: Edit the JSON File (Recommended for bulk updates)

1. Open `portfolio-data.json`
2. Make your changes (add/edit/remove projects)
3. Copy the entire JSON content
4. Open `index.html` in a text editor
5. Find the line that starts with: `const PORTFOLIO_DATA =`
6. Replace the JSON object after the `=` sign with your updated content
7. Save the file

### Option 2: Edit HTML Directly (Quick single edits)

1. Open `index.html` in a text editor (VS Code, Notepad++, etc.)
2. Search for: `const PORTFOLIO_DATA =`
3. Find the project you want to edit within the JSON object
4. Make your changes
5. Save the file

## 🎯 Quick Example: Adding a New Project

Find this section in `index.html`:

```javascript
const PORTFOLIO_DATA = {
  // ... other data ...
  "projects": [
    // Existing projects here...
    
    // Add your new project here:
    {
      "name": "YOUR PROJECT NAME",
      "company": "Your Company",
      "year": "2024",
      "description": "Detailed description of your project...",
      "shortDescription": "Brief description",
      "technologies": ["Flutter", "Firebase", "etc"],
      "playStore": "https://play.google.com/store/...",
      "appStore": null,
      "icon": "Y"
    }
  ]
};
```

## 🔄 Sync JSON File with HTML

If you prefer to keep editing `portfolio-data.json` and want to sync it to HTML:

**Windows PowerShell:**
```powershell
# Read JSON, minify it, and show the output
$json = Get-Content portfolio-data.json -Raw | ConvertFrom-Json | ConvertTo-Json -Compress
Write-Host "const PORTFOLIO_DATA = $json;"
```

Then copy the output and replace the line in `index.html`.

**Or use this simpler method:**
```powershell
# Copy just the content, ready to paste
$json = Get-Content portfolio-data.json -Raw
$json
```

## 📋 Common Edits

### Add a Store Link
```javascript
"playStore": "https://play.google.com/store/apps/details?id=your.app.id"
"appStore": "https://apps.apple.com/app/your-app/id123456"
```

### Remove a Store Link
```javascript
"playStore": null
"appStore": null
```

### Update Technologies
```javascript
"technologies": ["Flutter", "Firebase", "Node.js", "React"]
```

### Update Description
```javascript
"description": "Your new detailed description explaining the project..."
```

## ⚠️ Important Notes

1. **JSON Syntax**: Make sure to keep proper JSON formatting:
   - Use double quotes `"` not single quotes `'`
   - Commas between items, but not after the last item
   - Use `null` for empty values, not `""` or leaving it blank

2. **Validate JSON**: Use [jsonlint.com](https://jsonlint.com) to check if your JSON is valid

3. **Backup**: Keep a backup of your `index.html` before making changes

4. **Test**: Open `index.html` in your browser after changes to verify everything works

## 🚀 Why This Approach?

**Pros:**
- ✅ Works offline - just double-click the file
- ✅ No server needed
- ✅ Faster loading (no fetch request)
- ✅ Easier to deploy (single file)

**Cons:**
- ⚠️ Data is embedded in HTML (larger file size)
- ⚠️ Need to edit HTML to update data
- ⚠️ Not ideal for frequent updates

## 💡 Alternative: Keep Using JSON File

If you prefer to keep data in the separate JSON file:

1. Always use a local server when testing
2. The JSON file will work fine when deployed online
3. Run `python -m http.server 8000` for local testing

The HTML still supports loading from the JSON file when accessed via a server!

## 🆘 Troubleshooting

**Problem**: Projects don't show after editing
- Check browser console (F12) for errors
- Validate your JSON at jsonlint.com
- Make sure you saved the file
- Clear browser cache (Ctrl+Shift+R)

**Problem**: Syntax error in console
- You likely have invalid JSON syntax
- Common issues:
  - Missing comma
  - Extra comma after last item
  - Single quotes instead of double quotes
  - Missing closing bracket

**Problem**: Some projects show, others don't
- Check the JSON structure for the missing projects
- Make sure all required fields are present
- Validate JSON syntax

---

**Quick Reference:**

✅ **Edit data**: Edit `const PORTFOLIO_DATA =` in `index.html`  
✅ **Test locally**: Just double-click `index.html`  
✅ **Validate JSON**: Use jsonlint.com  
✅ **Deploy**: Upload `index.html` and `image.jpeg` to any host
