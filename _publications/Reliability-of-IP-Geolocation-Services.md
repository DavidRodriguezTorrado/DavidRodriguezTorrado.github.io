---
title: "Reliability of IP Geolocation Services for Assessing the Compliance of International Data Transfers"
collection: publications
permalink: /publication/ip-geolocation-compliance
date: 2022-06-06
venue: '2022 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)'
citation: 'M. Cozar, D. Rodriguez, J.M. Del Alamo, D. Guaman. "Reliability of IP Geolocation Services for Assessing the Compliance of International Data Transfers." <i>IEEE EuroS&P Workshops 2022</i>. https://doi.org/10.1109/EuroSPW55150.2022.00024'
type: 'conference'
category: conference
paperurl: 'https://doi.org/10.1109/EuroSPW55150.2022.00024'
doi: 'https://doi.org/10.1109/EuroSPW55150.2022.00024'
excerpt: 'This paper evaluates 10 IP geolocation services and reveals their limitations for compliance analysis. When applied to data from 767 Android apps, services disagree on destinations of personal data flows—raising concerns for GDPR-based assessments of international transfers.'
---

### Abstract

The General Data Protection Regulation (GDPR) imposes strict requirements on international data transfers, making it essential to accurately determine the destination of personal data. This paper assesses the reliability of 10 widely used IP geolocation services by comparing them against a ground-truth dataset of 900 IPs from AWS and Azure.

The results show wide disparities in reliability, with some services (e.g., RIPE IPmap) underperforming drastically and others (e.g., Maxmind, db-ip, ipinfo) yielding more accurate but still diverging results. The study then applies selected services to assess data flows from 767 Android apps and demonstrates how service choice significantly alters the compliance conclusions regarding cross-border data transfers.

### Key Contributions

- 🌐 Evaluated 10 geolocation services using a validated IP dataset across 21 countries.
- 📉 RIPE IPmap, previously cited as most reliable, returned correct results in only 2.22% of cases.
- 📱 Analyzed 767 Android apps, identifying 99,628 personal data flows to 1,467 IPs.
- ⚖️ Found that destination country assignment varies greatly across services, directly impacting GDPR compliance assessments.
- 🛡 Highlights challenges for regulators, developers, and auditors relying on geolocation for legal evaluations.

👉 [Read the full paper](https://doi.org/10.1109/EuroSPW55150.2022.00024)
