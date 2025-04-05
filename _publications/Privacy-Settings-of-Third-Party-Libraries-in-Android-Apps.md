---
title: "Privacy Settings of Third-Party Libraries in Android Apps: A Study of Facebook SDKs"
collection: publications
permalink: /publication/facebook-sdk-privacy-settings
date: 2025-08-14
venue: 'Proceedings on Privacy Enhancing Technologies, 2025(2)'
citation: 'D Rodriguez, JA Calandrino, JM Del Alamo, N Sadeh. "Privacy Settings of Third-Party Libraries in Android Apps: A Study of Facebook SDKs." <i>Proceedings on Privacy Enhancing Technologies, 2025(2)</i>. https://doi.org/10.56553/popets-2025-0056'
type: 'conference'
category: conference
featured: true
paperurl: 'https://petsymposium.org/popets/2025/popets-2025-0056.pdf'
doi: 'https://doi.org/10.56553/popets-2025-0056'
excerpt: 'This paper investigates how Android developers configure privacy-related settings when integrating the Facebook SDK and Audience Network SDK. Analyzing over 6,000 popular apps, the study finds that many retain default settings that are less privacy-friendly and fail to align with declared practices in privacy labels and policies. It offers recommendations for SDK providers to promote data minimization and improve transparency.'
---

### Abstract

Previous studies have demonstrated that privacy issues in mobile apps often stem from the integration of third-party libraries (TPLs). To shed light on factors that contribute to these issues, we investigate the privacy-related configuration choices available to and made by Android app developers who incorporate the Facebook Android SDK and Facebook Audience Network SDK in their apps.

We compile these Facebook SDKs' privacy-related settings and their defaults. Employing a multi-method approach that integrates static and dynamic analysis, we analyze more than 6,000 popular apps to determine whether the apps incorporate Facebook SDKs and, if so, whether and how developers modify settings. Finally, we assess how these settings align with the privacy practices that developers disclose in the apps’ privacy labels and policies.

We observe widespread inconsistencies between practices and disclosures in popular apps. These inconsistencies often stem from privacy settings, including a substantial number of cases in which apps retain default settings over alternatives that offer greater privacy.

We observe fewer possible compliance issues in potentially child-directed apps, but issues persist even in these apps.

### Key Takeaways

- Many Android apps integrate the Facebook SDK with privacy-intrusive default settings.
- Developers rarely override defaults, even when more privacy-friendly options exist.
- There are frequent mismatches between actual data practices and what is disclosed in privacy labels and policies.
- The paper proposes actionable steps SDK providers can take to promote better privacy practices, including:
  - Aligning default settings with data minimization principles.
  - Improving the discoverability and clarity of privacy-related documentation.

👉 [Read the full paper (PDF)](https://petsymposium.org/popets/2025/popets-2025-0056.pdf)  
📌 [DOI: 10.56553/popets-2025-0056](https://doi.org/10.56553/popets-2025-0056)