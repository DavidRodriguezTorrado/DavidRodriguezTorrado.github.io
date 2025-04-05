---
title: "Sharing is Not Always Caring: Delving Into Personal Data Transfer Compliance in Android Apps"
collection: publications
permalink: /publication/sharing-is-not-always-caring
date: 2024-01-03
venue: 'IEEE Access, Volume 12 (2024)'
citation: 'D. Rodriguez, J.M. Del Alamo, C. Fernández-Aller, N. Sadeh. "Sharing is Not Always Caring: Delving Into Personal Data Transfer Compliance in Android Apps." <i>IEEE Access</i>, 12 (2024). https://doi.org/10.1109/ACCESS.2024.3349425'
type: 'journal'
category: journals
paperurl: 'https://doi.org/10.1109/ACCESS.2024.3349425'
doi: 'https://doi.org/10.1109/ACCESS.2024.3349425'
excerpt: 'Analyzing 9,000 Android apps, this paper shows that over 80% of those transferring personal data off-device fail to meet GDPR transparency requirements. It introduces a fully automated method to detect undisclosed personal data transfers and highlights the key role of third-party libraries in non-compliance.'
---
### Abstract

This paper presents a fully automated method to identify and assess personal data transfers in Android apps and evaluate their disclosure according to GDPR transparency requirements. The method combines dynamic analysis with large language models to determine whether recipient organizations are properly identified in apps' privacy policies.

Applied to a dataset of 9,000 Android apps, the method revealed that over 80% of apps transferring personal data to third parties fail to disclose the recipients as required by GDPR. The analysis also showed that third-party libraries, such as those from Google, Meta, and Unity, are responsible for nearly 74% of undisclosed data transfers. The study discusses the implications for developers, regulators, and users, and provides recommendations to improve transparency.

### Key Findings

- ✅ 81.12% of apps sharing personal data failed to transparently disclose recipients of personal data transfers.
- 📱 The analysis was performed over 9,000 apps from the Google Play Store.
- 🧰 Third-party libraries (e.g., Google Mobile Services, Unity Ads, Facebook SDK) were responsible for nearly three-quarters of the undisclosed data transfers.
- 🧠 The method leverages GPT-based analysis to identify data controllers and recipients.

👉 [Read the full paper](https://doi.org/10.1109/ACCESS.2024.3349425)
