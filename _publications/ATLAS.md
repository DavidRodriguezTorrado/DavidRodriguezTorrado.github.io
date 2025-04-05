---
title: "ATLAS: Automatically Detecting Discrepancies Between Privacy Policies and Privacy Labels"
collection: publications
permalink: /publication/atlas-policy-label-discrepancies
date: 2023-07-03
venue: '2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)'
citation: 'A. Jain, D. Rodriguez, J.M. Del Alamo, N. Sadeh. "ATLAS: Automatically Detecting Discrepancies Between Privacy Policies and Privacy Labels." <i>IEEE EuroS&P Workshops 2023</i>. https://doi.org/10.1109/EuroSPW59978.2023.00016'
type: 'conference'
category: conference
paperurl: 'https://doi.org/10.1109/EuroSPW59978.2023.00016'
doi: 'https://doi.org/10.1109/EuroSPW59978.2023.00016'
excerpt: 'ATLAS analyzes 354,725 iOS apps and finds that 88% of those with both privacy labels and policies exhibit at least one discrepancy. The tool uses NLP to identify mismatches between declared practices and privacy labels—raising concerns of widespread compliance gaps.'
---

### Abstract

This paper introduces **ATLAS**, an automated system for detecting discrepancies between iOS app privacy policies and privacy labels. ATLAS includes a distributed scraping and classification pipeline, a scalable NLP-based classifier to predict privacy labels from privacy policies, and a discrepancy analysis framework to flag potential compliance issues.

The authors applied ATLAS to **354,725 iOS apps** and discovered that only 29.6% had both accessible privacy policies and privacy labels. Among them, **88%** had at least one discrepancy between their privacy label and policy text, with an average of **5.32 discrepancies per app**. These inconsistencies could signal issues with compliance under data protection regulations such as GDPR and CCPA.

### Key Contributions

- 🧠 Built a high-performance ensemble classifier (91.3% accuracy) to predict privacy labels from policy text across 32 data types.
- 📱 Analyzed 354K iOS apps: only 29.6% provided both a privacy policy and a privacy label.
- ⚠️ Found that 88.0% of those apps exhibited at least one potential discrepancy.
- 📉 Financial data types showed the highest policy incompleteness: e.g., 62.4% for Credit Info.
- 🔬 Released methodology for detecting missing or inconsistent disclosures at scale.

👉 [Read the full paper](https://doi.org/10.1109/EuroSPW59978.2023.00016)
