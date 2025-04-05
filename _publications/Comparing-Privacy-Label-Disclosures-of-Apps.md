---
title: "Comparing Privacy Label Disclosures of Apps Published in Both the App Store and Google Play Stores"
collection: publications
permalink: /publication/label-discrepancies-app-store-google-play
date: 2023-07-03
venue: '2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)'
citation: 'D. Rodriguez, A. Jain, J.M. Del Alamo, N. Sadeh. "Comparing Privacy Label Disclosures of Apps Published in Both the App Store and Google Play Stores." <i>IEEE EuroS&P Workshops 2023</i>. https://doi.org/10.1109/EuroSPW59978.2023.00022'
type: 'conference'
category: conference
paperurl: 'https://doi.org/10.1109/EuroSPW59978.2023.00022'
doi: 'https://doi.org/10.1109/EuroSPW59978.2023.00022'
excerpt: 'Analyzing 822 apps available in both Google Play and the App Store, this study finds privacy label discrepancies in 66.5% of cases. It introduces methods to detect inconsistencies and explores the role of static analysis in validating app behaviors against label claims.'
---

### Abstract

Google and Apple introduced privacy labels in 2022 and 2020 respectively to improve transparency around data collection practices in mobile apps. This paper compares privacy label disclosures across 822 apps published in both ecosystems, highlighting significant inconsistencies.

The study identifies a 66.5% discrepancy rate between Android and iOS labels for the same apps, with only 3.2% fully consistent. The team developed methods to map labels, match apps across stores, and use static analysis to compare disclosures with actual code behavior.

Static analysis of 560 Android apps revealed that 44.3% request access to sensitive data (e.g., location) not disclosed in their privacy labels, raising concerns about the reliability of developer-reported data practices.

### Key Contributions

- 📊 Mapping between Android and iOS privacy label data categories and practices.
- 📱 Matched and analyzed 822 apps available in both app stores.
- 🧪 Static analysis of 560 Android apps revealed widespread underreporting of data collection.
- ⚠️ Only 3.2% of apps consistently disclosed data collection practices across both platforms.
- 🛠️ Developed a toolchain combining Selenium, BeautifulSoup, and SVMs to automate label scraping and validation.

👉 [Read the full paper](https://doi.org/10.1109/EuroSPW59978.2023.00022)
