---
title: "Hunter: Tracing Anycast Communications to Uncover Cross-Border Personal Data Transfers"
collection: publications
permalink: /publication/hunter-anycast-cross-border
date: 2024-03-27
venue: 'Computers & Security, Volume 141 (2024), 103823'
citation: 'H. Pascual, J.M. del Alamo, D. Rodriguez, J.C. Dueñas. "Hunter: Tracing Anycast Communications to Uncover Cross-Border Personal Data Transfers." <i>Computers & Security</i>, 141 (2024), 103823. https://doi.org/10.1016/j.cose.2024.103823'
type: 'journal'
category: journals
paperurl: 'https://doi.org/10.1016/j.cose.2024.103823'
doi: 'https://doi.org/10.1016/j.cose.2024.103823'
excerpt: 'Hunter is an automated method to trace anycast communications and assess GDPR compliance. Applied to 197 Android apps, it found that 100% of analyzed anycast flows resulted in cross-border personal data transfers, none of which were properly disclosed in privacy policies.'
---

### Abstract

Network optimizations like anycast offer performance benefits but may inadvertently enable cross-border personal data transfers, potentially violating data protection laws such as the GDPR. This paper introduces **Hunter**, an automated method that traces anycast communications and identifies their destination country using traceroute, multilateration, and airport-based geolocation.

Hunter was validated with real-world IP addresses and achieved **97.67% precision** and **78.09% accuracy**, reaching 100% accuracy when repeated measurements were used. The tool was applied to **197 Android apps**, detecting 42 anycast IPs used for personal data transfers. All traceable anycast flows resulted in **transfers to non-EEA countries**, and none of the apps adequately disclosed these transfers in their privacy policies.

### Key Contributions

- 📍 Introduces **Hunter**, the first method for tracing and geolocating anycast personal data transfers.
- 🧪 Validated with VPNs across 29 EEA countries and Cloudflare’s public infrastructure.
- 📱 Applied to 197 Android apps, identifying 33 anycast IPs involved in international personal data flows.
- 🔍 100% of analyzed anycast transfers were cross-border and undisclosed in privacy policies.

👉 [Read the full paper](https://doi.org/10.1016/j.cose.2024.103823)
