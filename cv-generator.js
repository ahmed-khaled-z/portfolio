/**
 * CV PDF Generator
 * Generates a premium, ATS-friendly resume PDF from PORTFOLIO_DATA using jsPDF.
 * Section order: Summary → Education → Experience → Technical Skills → Soft Skills → Packages → Projects
 */
function generateCV() {
    if (typeof PORTFOLIO_DATA === 'undefined') {
        alert('Portfolio data not loaded.');
        return;
    }
    if (typeof jspdf === 'undefined') {
        alert('PDF library not loaded. Please check your internet connection.');
        return;
    }

    const { jsPDF } = jspdf;
    const data = PORTFOLIO_DATA;
    const p = data.personal;
    const s = data.social;

    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const mL = 16;
    const mR = 16;
    const cW = pageW - mL - mR;
    let y = 0;

    // ====== COLOR PALETTE ======
    const C = {
        primary: [65, 40, 180],
        dark: [25, 25, 45],
        heading: [35, 35, 55],
        text: [50, 50, 70],
        muted: [110, 110, 135],
        light: [150, 150, 170],
        accent: [90, 60, 220],
        link: [70, 50, 200],
        line: [65, 40, 180],
        lineFaint: [220, 215, 240],
        white: [255, 255, 255],
        tagBg: [240, 237, 255],
    };

    // ====== HELPERS ======

    function checkPage(needed) {
        if (y + needed > pageH - 14) {
            doc.addPage();
            y = 16;
        }
    }

    function setFont(style, size, color) {
        doc.setFont('helvetica', style);
        doc.setFontSize(size);
        doc.setTextColor(...(color || C.text));
    }

    function wrap(text, maxW, size, style) {
        doc.setFont('helvetica', style || 'normal');
        doc.setFontSize(size);
        return doc.splitTextToSize(text, maxW);
    }

    function drawLines(lines, x, fontSize, color, lineH) {
        lineH = lineH || 4.5;
        setFont('normal', fontSize, color || C.text);
        lines.forEach(function (line) {
            checkPage(lineH + 1);
            doc.text(line, x, y);
            y += lineH;
        });
    }

    function rightText(text, yPos, fontSize, color) {
        setFont('normal', fontSize, color || C.muted);
        var w = doc.getTextWidth(text);
        doc.text(text, pageW - mR - w, yPos);
    }

    // ====== SECTION HEADING ======
    function sectionHeading(title) {
        checkPage(14);
        y += 7;

        // Accent bar
        doc.setFillColor(...C.primary);
        doc.roundedRect(mL, y - 4, 3, 10, 1.5, 1.5, 'F');

        // Title
        setFont('bold', 11, C.primary);
        doc.text(title, mL + 7, y + 2.5);

        // Thin line after title
        var titleW = doc.getTextWidth(title);
        doc.setDrawColor(...C.lineFaint);
        doc.setLineWidth(0.3);
        doc.line(mL + 7 + titleW + 3, y + 2.5, pageW - mR, y + 2.5);

        y += 10;
    }

    // ====== BULLET POINT ======
    function bulletItem(text, indent) {
        indent = indent || 0;
        var bx = mL + indent;
        var lines = wrap(text, cW - indent - 5, 9);
        checkPage(lines.length * 4.2 + 1);

        // Bullet dot
        doc.setFillColor(...C.primary);
        doc.circle(bx + 1.5, y - 1, 0.7, 'F');

        // Text
        setFont('normal', 9, C.text);
        lines.forEach(function (line, idx) {
            if (idx === 0) {
                doc.text(line, bx + 5, y);
            } else {
                y += 4.2;
                checkPage(5);
                doc.text(line, bx + 5, y);
            }
        });
        y += 4.5;
    }

    // ==========================================================
    //  HEADER
    // ==========================================================
    y = 16;

    // Colored accent strip at top
    doc.setFillColor(...C.primary);
    doc.rect(0, 0, pageW, 3, 'F');

    // Name
    setFont('bold', 24, C.dark);
    doc.text(p.name, mL, y);
    y += 8;

    // Title
    setFont('normal', 13, C.primary);
    doc.text(p.title, mL, y);
    y += 7;

    // Contact line
    setFont('normal', 8.5, C.muted);
    var contactItems = [];
    if (p.location) contactItems.push(p.location);
    if (p.phone) contactItems.push(p.phone);
    if (p.email) contactItems.push(p.email);
    doc.text(contactItems.join('   |   '), mL, y);
    y += 5;

    // Links line
    var lx = mL;
    var linkSize = 8;
    function addLink(label, url) {
        setFont('normal', linkSize, C.link);
        doc.textWithLink(label, lx, y, { url: url });
        lx += doc.getTextWidth(label);
        setFont('normal', linkSize, C.light);
        doc.text('   •   ', lx, y);
        lx += doc.getTextWidth('   •   ');
    }

    if (s.linkedin) addLink('LinkedIn', s.linkedin);
    if (s.github) addLink('GitHub', s.github);
    if (s.medium) addLink('Medium', s.medium);

    var portfolioUrl = window.location.href.split('#')[0];
    setFont('normal', linkSize, C.link);
    doc.textWithLink('Portfolio', lx, y, { url: portfolioUrl });
    y += 5;

    // Header separator
    doc.setDrawColor(...C.primary);
    doc.setLineWidth(0.5);
    doc.line(mL, y, pageW - mR, y);
    y += 2;

    // ==========================================================
    //  1. PROFESSIONAL SUMMARY
    // ==========================================================
    sectionHeading('PROFESSIONAL SUMMARY');
    setFont('normal', 9.5, C.text);
    var summaryLines = wrap(p.description, cW, 9.5);
    summaryLines.forEach(function (line) {
        checkPage(5);
        doc.text(line, mL, y);
        y += 4.8;
    });

    // ==========================================================
    //  2. EDUCATION
    // ==========================================================
    sectionHeading('EDUCATION');
    checkPage(12);

    setFont('bold', 10.5, C.dark);
    doc.text(p.education.degree, mL, y);
    rightText(p.education.period, y, 9);
    y += 5;

    setFont('normal', 9.5, C.text);
    doc.text(p.education.institution, mL, y);
    y += 4;

    // ==========================================================
    //  3. PROFESSIONAL EXPERIENCE
    // ==========================================================
    sectionHeading('PROFESSIONAL EXPERIENCE');

    data.experience.forEach(function (exp, i) {
        checkPage(16);

        // Job title
        setFont('bold', 10.5, C.dark);
        doc.text(exp.title, mL, y);

        // Period aligned right
        rightText(exp.period, y, 8.5);
        y += 5;

        // Company + type
        setFont('normal', 9.5, C.text);
        doc.text(exp.company, mL, y);

        setFont('italic', 8.5, C.muted);
        var typeW = doc.getTextWidth(exp.type);
        doc.text(exp.type, pageW - mR - typeW, y);
        y += 5;

        // Subtle divider between entries (except last)
        if (i < data.experience.length - 1) {
            doc.setDrawColor(...C.lineFaint);
            doc.setLineWidth(0.15);
            doc.line(mL, y, pageW - mR, y);
            y += 4;
        }
    });

    // ==========================================================
    //  4. TECHNICAL SKILLS
    // ==========================================================
    sectionHeading('TECHNICAL SKILLS');

    var technicalSkills = data.skills.filter(function (s) {
        return s.category !== 'Soft Skills';
    });

    technicalSkills.forEach(function (skill) {
        checkPage(10);

        // Category label
        setFont('bold', 9, C.dark);
        var label = skill.category + ':';
        doc.text(label, mL, y);
        var labelW = doc.getTextWidth(label + '  ');

        // Items inline
        setFont('normal', 9, C.text);
        var itemsText = skill.items.join('  •  ');
        var lines = wrap(itemsText, cW - labelW, 9);

        lines.forEach(function (line, idx) {
            if (idx === 0) {
                doc.text(line, mL + labelW, y);
            } else {
                y += 4.3;
                checkPage(5);
                doc.text(line, mL + labelW, y);
            }
        });
        y += 5.5;
    });

    // ==========================================================
    //  5. SOFT SKILLS
    // ==========================================================
    var softSkillsCat = data.skills.find(function (s) {
        return s.category === 'Soft Skills';
    });

    if (softSkillsCat) {
        sectionHeading('SOFT SKILLS');
        checkPage(8);
        setFont('normal', 9, C.text);
        var softText = softSkillsCat.items.join('  •  ');
        var softLines = wrap(softText, cW, 9);
        softLines.forEach(function (line) {
            checkPage(5);
            doc.text(line, mL, y);
            y += 4.5;
        });
    }

    // ==========================================================
    //  6. PUBLISHED PACKAGES
    // ==========================================================
    if (data.packages && data.packages.length > 0) {
        sectionHeading('PUBLISHED PACKAGES');

        data.packages.forEach(function (pkg) {
            checkPage(12);

            // Package name (bold) + link
            setFont('bold', 9.5, C.dark);
            doc.text(pkg.name, mL, y);

            var nameW = doc.getTextWidth(pkg.name);
            setFont('normal', 8, C.link);
            doc.textWithLink('  ↗ pub.dev', mL + nameW, y, { url: pkg.url });
            y += 4.5;

            // Description
            setFont('normal', 8.5, C.text);
            var descLines = wrap(pkg.description, cW, 8.5);
            descLines.forEach(function (line) {
                checkPage(4.5);
                doc.text(line, mL, y);
                y += 4;
            });
            y += 2;
        });
    }

    // ==========================================================
    //  7. KEY PROJECTS
    // ==========================================================
    sectionHeading('KEY PROJECTS');

    data.projects.forEach(function (proj, i) {
        checkPage(18);

        // Project name + company/year
        setFont('bold', 10, C.dark);
        doc.text(proj.name, mL, y);

        var meta = proj.company + '  •  ' + proj.year;
        rightText(meta, y, 8.5);
        y += 4.5;

        // Short description as a bullet
        var desc = proj.shortDescription || proj.description;
        if (desc.length > 160) desc = desc.substring(0, 157) + '...';
        bulletItem(desc);

        // Tech stack
        setFont('italic', 7.5, C.muted);
        var techText = proj.technologies.join(', ');
        var techLines = wrap(techText, cW - 5, 7.5, 'italic');
        techLines.forEach(function (line) {
            checkPage(4);
            doc.text(line, mL + 5, y);
            y += 3.8;
        });

        // Store links
        var hasLinks = false;
        var storeLx = mL + 5;

        if (proj.playStore) {
            setFont('normal', 7.5, C.link);
            doc.textWithLink('Play Store', storeLx, y, { url: proj.playStore });
            storeLx += doc.getTextWidth('Play Store') + 6;
            hasLinks = true;
        }
        if (proj.appStore && proj.appStore.indexOf('<APP_ID>') === -1) {
            setFont('normal', 7.5, C.link);
            doc.textWithLink('App Store', storeLx, y, { url: proj.appStore });
            hasLinks = true;
        }
        if (hasLinks) y += 4;

        // Divider between projects (except last)
        if (i < data.projects.length - 1) {
            y += 1;
            doc.setDrawColor(...C.lineFaint);
            doc.setLineWidth(0.15);
            doc.line(mL + 5, y, pageW - mR, y);
            y += 4;
        }
    });

    // ==========================================================
    //  FOOTER — subtle branding
    // ==========================================================
    var footerY = pageH - 8;
    // Draw on all pages
    var totalPages = doc.internal.getNumberOfPages();
    for (var pg = 1; pg <= totalPages; pg++) {
        doc.setPage(pg);

        // Top accent strip
        doc.setFillColor(...C.primary);
        doc.rect(0, 0, pageW, 3, 'F');

        // Footer line
        doc.setDrawColor(...C.lineFaint);
        doc.setLineWidth(0.2);
        doc.line(mL, footerY - 3, pageW - mR, footerY - 3);

        // Footer text
        setFont('normal', 7, C.light);
        doc.text(p.name + '  •  ' + p.title, mL, footerY);

        var pageText = 'Page ' + pg + ' of ' + totalPages;
        var ptW = doc.getTextWidth(pageText);
        doc.text(pageText, pageW - mR - ptW, footerY);
    }

    // ====== SAVE ======
    var fileName = p.name + ' (' + p.title + ').pdf';
    doc.save(fileName);
}
