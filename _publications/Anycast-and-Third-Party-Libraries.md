---
title: "Anycast and Third-party Libraries: A Recipe for a Privacy Disaster?"
collection: publications
permalink: /publication/anycast-third-party-disaster
date: 2025-04-01
venue: 'IEEE Communications Magazine (Accepted for Publication, 2025)'
citation: 'H. Pascual, J.M. Del Alamo, D. Rodriguez, J.C. Dueñas. "Anycast and Third-party Libraries: A Recipe for a Privacy Disaster?" <i>IEEE Communications Magazine</i>, 2025. https://doi.org/10.1109/MCOM.006.2400576'
type: 'journal'
category: journals
paperurl: 'https://doi.org/10.1109/MCOM.006.2400576'
doi: 'https://doi.org/10.1109/MCOM.006.2400576'
featured: false
excerpt: 'This article reveals that 98.65% of Android apps and 90% of third-party libraries using anycast potentially violate GDPR by enabling undisclosed international personal data transfers. It emphasizes the need for transparency and standardization in TPL privacy disclosures.'
---

### Abstract

Third-party libraries (TPLs) are a cornerstone of mobile app development, but their use of anycast-based communications raises serious privacy concerns. This article presents the first large-scale study examining how anycast addresses—used by TPLs for global service delivery—lead to undisclosed international personal data transfers.

The authors analyzed 5,759 Android apps and found that nearly 99% of those transferring data via anycast do not disclose these transfers in their privacy policies. Furthermore, 90% of the identified TPLs potentially violate GDPR transparency requirements. The study highlights the role of Unity Ads, Google Mobile Ads, and other dominant TPLs in triggering most of these flows, often without meaningful developer control or visibility.

### Key Contributions

- 🌍 Analysis of 5,759 Android apps and 4.2M+ network connections, identifying 200 anycast IPs.
- 📉 98.65% of apps and 90% of TPLs transferring data to non-EEA countries failed to disclose destinations.
- 🔍 Identified 20 key TPLs; Unity Ads alone was responsible for 57.08% of data flows.
- 📜 Exposes the lack of standardized privacy policy publication and automation for TPLs.
- 🧭 Calls for ecosystem-wide changes: privacy manifests, app store enforcement, and network-level safeguards.

👉 [Read the full paper](https://doi.org/10.1109/MCOM.006.2400576)
