-- AIVEN PRODUCTION DB BACKUP
-- TIMESTAMP: 2026-10-06T06:19:50.851Z
-- DATABASE: defaultdb

DROP TABLE IF EXISTS `AdminSession`;
CREATE TABLE "AdminSession" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "userId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "tokenHash" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "userAgent" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ipAddress" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "expiresAt" datetime(3) NOT NULL,
  "revokedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("id"),
  UNIQUE KEY "AdminSession_tokenHash_key" ("tokenHash"),
  KEY "AdminSession_userId_idx" ("userId"),
  KEY "AdminSession_expiresAt_idx" ("expiresAt"),
  CONSTRAINT "AdminSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "AdminUser" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuff1j8x00011mfqrtudz0nx', 'cmufezgon00001m9minlm53xg', '8fb5720d4f6357f3d3c830d12aec78a62520864de4c1b6fa70116ccb5282d07f', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '::1', '2026-10-01 10:55:38', NULL, '2026-09-24 10:55:38');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmugkcpyl00081m1vcn1n0gzd', 'cmufezgon00001m9minlm53xg', 'd8f99f8025c9d4a11a20e95d5b2b56d1acc6a0ecd29a7d892f2877c38cb3cee9', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '::1', '2026-10-02 06:12:04', NULL, '2026-09-25 06:12:04');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuqnldqt00011m2vz1zsfsur', 'cmufezgon00001m9minlm53xg', '3accbfab7ec6332fc57e212f03b77254d154d14752c7dd9159bbc94acb511fca', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '::1', '2026-10-09 07:40:29', '2026-10-05 09:41:47', '2026-10-02 07:40:29');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuv290p300011mlaw3l7n434', 'cmufezgon00001m9minlm53xg', '48a31343d3436575e32fc529b6a0b97f38c2814db188dc5336413f31b72c93e7', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '::1', '2026-10-12 09:41:51', NULL, '2026-10-05 09:41:51');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuv38lzn0001kw04r6zam32t', 'cmufezgon00001m9minlm53xg', '38a2d7cdde0da20de7616cf5c9ef17d00cf01d530e60b2e1c1f7596523b5ee6e', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '103.67.93.243', '2026-10-12 10:09:32', '2026-10-05 10:42:21', '2026-10-05 10:09:32');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuv4eyrw0001jq04x50h87ah', 'cmuv4dyte0006jp0487gqam0o', 'a6429b99b7ab817e92bb759d446ef9b7cf430984ed4455c127cf696170e106de', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '103.67.93.254', '2026-10-12 10:42:28', '2026-10-05 10:42:43', '2026-10-05 10:42:28');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuv4fe670003lh04sng8g708', 'cmufezgon00001m9minlm53xg', '1cff397cc422d33acfbbe1090669d449afecf5134c5403aae7bcd0cee9b3f18f', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '103.67.93.254', '2026-10-12 10:42:48', NULL, '2026-10-05 10:42:48');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuw9dh3w0001jv04elsvpazn', 'cmufezgon00001m9minlm53xg', 'b92e8966de481b2de76d176cc71faeb1a47fdda8ab8ff0a6e92a1e6badcc5dc3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '103.67.93.241', '2026-10-13 05:49:03', NULL, '2026-10-06 05:49:03');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuw9f3v70001kw04puobj5ix', 'cmufezgon00001m9minlm53xg', '560f4c4dbdd668e60023bf254b81d97dda9829332d931a02b2225ee77ffda875', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', '103.67.93.252', '2026-10-13 05:50:19', NULL, '2026-10-06 05:50:19');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuw9f7m70005kw046vmnkr0t', 'cmufezgon00001m9minlm53xg', '152849b3b07266c044dec4a61df8f0bf60814d2e3cbb63ef5dabae9c32acebba', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36', '103.67.93.252', '2026-10-13 05:50:24', NULL, '2026-10-06 05:50:24');
INSERT INTO `AdminSession` (`id`, `userId`, `tokenHash`, `userAgent`, `ipAddress`, `expiresAt`, `revokedAt`, `createdAt`) VALUES ('cmuw9fi860001l504lygwkz2e', 'cmufezgon00001m9minlm53xg', '8797ae2568bab574a1ba7ff89038ffa654ad7c1649fb87f0d7fe296723bc9730', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36', '103.67.93.241', '2026-10-13 05:50:37', NULL, '2026-10-06 05:50:37');

DROP TABLE IF EXISTS `AdminUser`;
CREATE TABLE "AdminUser" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "name" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "email" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "passwordHash" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "role" enum('SUPER_ADMIN','ADMIN','EDITOR') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'EDITOR',
  "status" enum('ACTIVE','INVITED','SUSPENDED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INVITED',
  "lastLoginAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "AdminUser_email_key" ("email")
);

INSERT INTO `AdminUser` (`id`, `name`, `email`, `passwordHash`, `role`, `status`, `lastLoginAt`, `createdAt`, `updatedAt`) VALUES ('cmufezgon00001m9minlm53xg', 'Suryansh Admin', 'admin@geetauniversity.local', '$2b$12$lpC96J0wHt0GZ46Aur7nM.cOomd3eYcCaoSdov3Tg7NsihEurvTva', 'SUPER_ADMIN', 'ACTIVE', '2026-10-06 05:50:38', '2026-09-24 10:54:02', '2026-10-06 05:50:38');
INSERT INTO `AdminUser` (`id`, `name`, `email`, `passwordHash`, `role`, `status`, `lastLoginAt`, `createdAt`, `updatedAt`) VALUES ('cmuv4dyte0006jp0487gqam0o', 'Kunal', 'kunalkhandelwal@gmail.com', '$2b$12$e2C7fPKUVAJ34zf1W3hzMu3V3xAakqhNE.FmkiohnC1DZQiElW6wq', 'ADMIN', 'ACTIVE', '2026-10-05 10:42:29', '2026-10-05 10:41:41', '2026-10-05 10:42:29');

DROP TABLE IF EXISTS `AdmissionCycle`;
CREATE TABLE "AdmissionCycle" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "year" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "content" json NOT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "AdmissionCycle_year_key" ("year"),
  KEY "AdmissionCycle_status_idx" ("status")
);


DROP TABLE IF EXISTS `AuditLog`;
CREATE TABLE "AuditLog" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "actorId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "action" enum('CREATE','UPDATE','DELETE','PUBLISH','UNPUBLISH','LOGIN','LOGOUT') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "entityType" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "entityId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "before" json DEFAULT NULL,
  "after" json DEFAULT NULL,
  "ipAddress" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "userAgent" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("id"),
  KEY "AuditLog_actorId_idx" ("actorId"),
  KEY "AuditLog_entityType_entityId_idx" ("entityType","entityId"),
  KEY "AuditLog_createdAt_idx" ("createdAt"),
  CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuff1jab00031mfq7757vbx1', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-09-24 10:55:38');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmugja1za00021m1vq8wqc2fr', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Department', 'cmugja1xk00001m1vcvym55ys', NULL, '{"id":"cmugja1xk00001m1vcvym55ys","body":null,"name":"school of testinggg","slug":"school-of-testing","seoId":null,"status":"DRAFT","summary":null,"createdAt":"2026-09-25T05:42:00.776Z","shortName":"test","sortOrder":0,"updatedAt":"2026-09-25T05:42:00.776Z","heroImageId":null,"publishedAt":null}', NULL, NULL, '2026-09-25 05:42:00');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmugjahp100061m1vyr78jsel', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Program', 'cmugjahok00041m1vwz8gmyqp', NULL, '{"id":"cmugjahok00041m1vwz8gmyqp","name":"Equal Opportunity Cell details","slug":"ggls","level":"ug","seoId":null,"status":"DRAFT","feeData":null,"duration":"3","overview":null,"createdAt":"2026-09-25T05:42:21.188Z","sortOrder":0,"updatedAt":"2026-09-25T05:42:21.188Z","eligibility":"jlnjln","heroImageId":null,"publishedAt":null,"departmentId":"cmugja1xk00001m1vcvym55ys"}', NULL, NULL, '2026-09-25 05:42:21');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmugkcpzs000a1m1voz66py3w', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-09-25 06:12:04');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvc9vg00021ms8vvw3udgw', 'cmufezgon00001m9minlm53xg', 'CREATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', NULL, '{"location":"apifjjkadnfljnsdjanfnsdljaf","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-09-30 08:54:03');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvchsu00051ms8ud8u5dnu', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"apifjjkadnfljnsdjanfnsdljaf","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-09-30 08:54:13');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvdqk300081ms8lw07d5zk', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', NULL, NULL, '2026-09-30 08:55:11');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvds3i000b1ms8efac56bm', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', NULL, NULL, '2026-09-30 08:55:13');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvdtzp000e1ms8h4f776m5', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', NULL, NULL, '2026-09-30 08:55:15');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunve30d000h1ms8kyge60rk', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"dalsknfjanwjfnaekbfaskhfbka"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-09-30 08:55:27');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvi78s000l1ms8rctyekt5', 'cmufezgon00001m9minlm53xg', 'CREATE', 'MediaAsset', 'cmunvi784000j1ms8ax08spxj', NULL, '{"id":"cmunvi784000j1ms8ax08spxj","url":"/api/media/af76d801-4aa5-42a5-bdbf-423d6ebb166b.jpg","width":null,"height":null,"altText":"test","caption":null,"fileName":"JPEG image-47D9-8B91-41-0.jpeg","mimeType":"image/jpeg","createdAt":"2026-09-30T08:58:39.507Z","sizeBytes":610381,"updatedAt":"2026-09-30T08:58:39.507Z","storageKey":"af76d801-4aa5-42a5-bdbf-423d6ebb166b.jpg","createdById":"cmufezgon00001m9minlm53xg"}', NULL, NULL, '2026-09-30 08:58:39');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmunvifbb000n1ms8q1xpda0y', 'cmufezgon00001m9minlm53xg', 'DELETE', 'MediaAsset', 'cmunvi784000j1ms8ax08spxj', '{"id":"cmunvi784000j1ms8ax08spxj","url":"/api/media/af76d801-4aa5-42a5-bdbf-423d6ebb166b.jpg","width":null,"_count":{"downloads":0,"heroBanners":0,"galleryImages":0,"programsAsHero":0,"facultyPortraits":0,"departmentsAsHero":0},"height":null,"altText":"test","caption":null,"fileName":"JPEG image-47D9-8B91-41-0.jpeg","mimeType":"image/jpeg","createdAt":"2026-09-30T08:58:39.507Z","sizeBytes":610381,"updatedAt":"2026-09-30T08:58:39.507Z","storageKey":"af76d801-4aa5-42a5-bdbf-423d6ebb166b.jpg","createdById":"cmufezgon00001m9minlm53xg"}', NULL, NULL, NULL, '2026-09-30 08:58:49');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuqnldsu00031m2vmtr7kgqh', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-02 07:40:29');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuruprlg00021maj0t1wpi6u', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Department', 'cmuruprjl00001majti2asox6', NULL, '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"DRAFT","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-03T03:47:37.522Z","heroImageId":null,"publishedAt":null}', NULL, NULL, '2026-10-03 03:47:37');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmurut7wh00061maj76wkblnr', 'cmufezgon00001m9minlm53xg', 'CREATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', NULL, '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"DRAFT","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-03T03:50:18.649Z","publishedAt":null}}', NULL, NULL, '2026-10-03 03:50:18');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmurywnos00091majughizpsn', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Notice', 'cmurywnni00071maj67cqrabu', NULL, '{"id":"cmurywnni00071maj67cqrabu","body":"bkhjkbkjkj","slug":"testing","seoId":null,"title":"asdfghjkl","status":"DRAFT","summary":"dffghfkujhlihjli","createdAt":"2026-10-03T05:44:57.535Z","expiresAt":"2026-10-04T23:59:59.999Z","updatedAt":"2026-10-03T05:44:57.535Z","publishedAt":null}', NULL, NULL, '2026-10-03 05:44:57');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmurz0j4y000b1majh9b9ynhr', 'cmufezgon00001m9minlm53xg', 'PUBLISH', 'Notice', 'cmurywnni00071maj67cqrabu', '{"id":"cmurywnni00071maj67cqrabu","body":"bkhjkbkjkj","slug":"testing","seoId":null,"title":"asdfghjkl","status":"DRAFT","summary":"dffghfkujhlihjli","createdAt":"2026-10-03T05:44:57.535Z","expiresAt":"2026-10-04T23:59:59.999Z","updatedAt":"2026-10-03T05:44:57.535Z","publishedAt":null}', '{"id":"cmurywnni00071maj67cqrabu","body":"bkhjkbkjkj","slug":"testing","seoId":null,"title":"asdfghjkl","status":"PUBLISHED","summary":"dffghfkujhlihjli","createdAt":"2026-10-03T05:44:57.535Z","expiresAt":"2026-10-04T23:59:59.999Z","updatedAt":"2026-10-03T05:47:58.270Z","publishedAt":"2026-10-03T05:47:58.269Z"}', NULL, NULL, '2026-10-03 05:47:58');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmurz22u1000d1majq193gkfn', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Department', 'cmuruprjl00001majti2asox6', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"DRAFT","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-03T03:47:37.522Z","heroImageId":null,"publishedAt":null}', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"PUBLISHED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-03T05:49:10.469Z","heroImageId":null,"publishedAt":"2026-10-03T05:49:10.468Z"}', NULL, NULL, '2026-10-03 05:49:10');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmus1e9ov00031ms1xfhhn7tj', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Event', 'cmus1e9me00001ms1685ixok5', NULL, '{"seo":{"title":"fdasfgadsfads","noIndex":false,"description":"adfadfadsfg"},"event":{"id":"cmus1e9me00001ms1685ixok5","body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"DRAFT","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:38.388Z","publishedAt":null}}', NULL, NULL, '2026-10-03 06:54:38');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmus1eevd00051ms18ne5idgw', 'cmufezgon00001m9minlm53xg', 'PUBLISH', 'Event', 'cmus1e9me00001ms1685ixok5', '{"id":"cmus1e9me00001ms1685ixok5","seo":{"id":"cmus1e9mg00011ms10w883csy","title":"fdasfgadsfads","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:38.388Z","description":"adfadfadsfg"},"body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"DRAFT","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:38.388Z","publishedAt":null}', '{"seo":{"title":"fdasfgadsfads","noIndex":false,"description":"adfadfadsfg"},"event":{"id":"cmus1e9me00001ms1685ixok5","body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"PUBLISHED","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:45.141Z","publishedAt":"2026-10-03T06:54:45.140Z"}}', NULL, NULL, '2026-10-03 06:54:45');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv291hm00031mlag434t8fa', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-05 09:41:52');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv38nry0003kw04xw79vuy8', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-05 10:09:34');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3a4zf0001jp04ettijye9', 'cmufezgon00001m9minlm53xg', 'PUBLISH', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-03T03:50:18.649Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"DRAFT","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-03T03:50:18.649Z","publishedAt":null}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:42.219Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:10:43');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3a8w30003jp04fissflg4', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:42.219Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:42.219Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:47.318Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:10:48');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3acpb0005jp04tie7ipwq', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:47.318Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:47.318Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:52.225Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:10:53');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3agnu0007jp04ayg8c651', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:52.225Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:52.225Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:57.355Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:10:58');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3ako40009jp043gb1d7pr', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:57.355Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:10:57.355Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:02.550Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:11:03');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3aohz000bjp04kpa6nf7r', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:02.550Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:02.550Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:07.512Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:11:08');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3as9d000djp04yeuqoio4', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'NewsArticle', 'cmurut7vd00031majmreyntyc', '{"id":"cmurut7vd00031majmreyntyc","seo":{"id":"cmurut7ve00041majbqtqiwhf","title":"ljfndajlnfadf","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:07.512Z","description":"dfadfadfad"},"body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:07.512Z","publishedAt":"2026-10-05T10:10:42.217Z"}', '{"seo":{"title":"ljfndajlnfadf","noIndex":false,"description":"dfadfadfad"},"article":{"id":"cmurut7vd00031majmreyntyc","body":"ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv","slug":"news","seoId":"cmurut7ve00041majbqtqiwhf","title":"noadfoiajfoi","status":"PUBLISHED","excerpt":"hjdabfkjadfa","createdAt":"2026-10-03T03:50:18.649Z","updatedAt":"2026-10-05T10:11:12.408Z","publishedAt":"2026-10-05T10:10:42.217Z"}}', NULL, NULL, '2026-10-05 10:11:13');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3bgpt0001l004gvhv4o9t', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Event', 'cmus1e9me00001ms1685ixok5', '{"id":"cmus1e9me00001ms1685ixok5","seo":{"id":"cmus1e9mg00011ms10w883csy","title":"fdasfgadsfads","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:45.141Z","description":"adfadfadsfg"},"body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"PUBLISHED","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-03T06:54:45.141Z","publishedAt":"2026-10-03T06:54:45.140Z"}', '{"seo":{"title":"fdasfgadsfads","noIndex":false,"description":"adfadfadsfg"},"event":{"id":"cmus1e9me00001ms1685ixok5","body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"PUBLISHED","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-05T10:11:44.063Z","publishedAt":"2026-10-03T06:54:45.140Z"}}', NULL, NULL, '2026-10-05 10:11:45');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3c21y0001l304aczk95mg', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Event', 'cmus1e9me00001ms1685ixok5', '{"id":"cmus1e9me00001ms1685ixok5","seo":{"id":"cmus1e9mg00011ms10w883csy","title":"fdasfgadsfads","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-05T10:11:44.063Z","description":"adfadfadsfg"},"body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"xhffhgkjlkm;","endsAt":"2026-10-04T06:54:00.000Z","status":"PUBLISHED","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-05T10:11:44.063Z","publishedAt":"2026-10-03T06:54:45.140Z"}', '{"seo":{"title":"fdasfgadsfads","noIndex":false,"description":"adfadfadsfg"},"event":{"id":"cmus1e9me00001ms1685ixok5","body":"dsgsdgsdgsdgsdgsdg","slug":"test","seoId":"cmus1e9mg00011ms10w883csy","title":"adbasmndnmasbdnjksahdasdasda","endsAt":"2026-10-04T06:54:00.000Z","status":"PUBLISHED","excerpt":"dafadsgadgasdg","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-03T06:54:00.000Z","createdAt":"2026-10-03T06:54:38.388Z","updatedAt":"2026-10-05T10:12:11.637Z","publishedAt":"2026-10-03T06:54:45.140Z"}}', NULL, NULL, '2026-10-05 10:12:13');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3duij0003jm04gpaj0kew', 'cmufezgon00001m9minlm53xg', 'PUBLISH', 'Event', 'cmuv3du1f0000jm04d6tvekod', NULL, '{"seo":{"title":"fadfads","noIndex":true,"description":"description"},"event":{"id":"cmuv3du1f0000jm04d6tvekod","body":"adsbfkhadsfkjadkjbf","slug":"testing","seoId":"cmuv3du1f0001jm04k28bgj7q","title":"aszxcvbnm","endsAt":"2026-10-06T10:12:00.000Z","status":"PUBLISHED","excerpt":"adfadsbmbfhksdaf","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-05T10:12:00.000Z","createdAt":"2026-10-05T10:13:35.955Z","updatedAt":"2026-10-05T10:13:35.955Z","publishedAt":"2026-10-05T10:13:35.954Z"}}', NULL, NULL, '2026-10-05 10:13:36');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3emaw0007jm04qmz5adw5', 'cmufezgon00001m9minlm53xg', 'CREATE', 'Event', 'cmuv3elth0004jm04ffdlqg13', NULL, '{"seo":{"title":"asdbjkahsd","noIndex":false,"description":"akhbdkhabs"},"event":{"id":"cmuv3elth0004jm04ffdlqg13","body":"asdbvashdfbahsdkbjdfas","slug":"kunal","seoId":"cmuv3elth0005jm04gk5n8he6","title":"kunal","endsAt":"2026-10-06T10:13:00.000Z","status":"DRAFT","excerpt":"dasbdbhkasbdas","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-05T10:13:00.000Z","createdAt":"2026-10-05T10:14:11.957Z","updatedAt":"2026-10-05T10:14:11.957Z","publishedAt":null}}', NULL, NULL, '2026-10-05 10:14:12');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv3ezis0009jm04ly07ibmt', 'cmufezgon00001m9minlm53xg', 'PUBLISH', 'Event', 'cmuv3elth0004jm04ffdlqg13', '{"id":"cmuv3elth0004jm04ffdlqg13","seo":{"id":"cmuv3elth0005jm04gk5n8he6","title":"asdbjkahsd","noIndex":false,"ogImage":null,"ogTitle":null,"keywords":null,"canonical":null,"createdAt":"2026-10-05T10:14:11.957Z","updatedAt":"2026-10-05T10:14:11.957Z","description":"akhbdkhabs"},"body":"asdbvashdfbahsdkbjdfas","slug":"kunal","seoId":"cmuv3elth0005jm04gk5n8he6","title":"kunal","endsAt":"2026-10-06T10:13:00.000Z","status":"DRAFT","excerpt":"dasbdbhkasbdas","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-05T10:13:00.000Z","createdAt":"2026-10-05T10:14:11.957Z","updatedAt":"2026-10-05T10:14:11.957Z","publishedAt":null}', '{"seo":{"title":"asdbjkahsd","noIndex":false,"description":"akhbdkhabs"},"event":{"id":"cmuv3elth0004jm04ffdlqg13","body":"asdbvashdfbahsdkbjdfas","slug":"kunal","seoId":"cmuv3elth0005jm04gk5n8he6","title":"kunal","endsAt":"2026-10-06T10:13:00.000Z","status":"PUBLISHED","excerpt":"dasbdbhkasbdas","location":"NH-71, Naultha, Panipat, Haryana 132145","startsAt":"2026-10-05T10:13:00.000Z","createdAt":"2026-10-05T10:14:11.957Z","updatedAt":"2026-10-05T10:14:28.426Z","publishedAt":"2026-10-05T10:14:28.426Z"}}', NULL, NULL, '2026-10-05 10:14:29');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv47mdw0002jp04adujo8u2', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"asdfjbhsdabfghbsdfbghsdkfgkbhdsfg","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-10-05 10:36:45');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv47zdl0005jp04wjkifn3r', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"asdfjbhsdabfghbsdfbghsdkfgkbhdsfg","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-10-05 10:37:02');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4aumr0001lh04czm2psvq', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Department', 'cmuruprjl00001majti2asox6', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"PUBLISHED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-03T05:49:10.469Z","heroImageId":null,"publishedAt":"2026-10-03T05:49:10.468Z"}', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"PUBLISHED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-05T10:39:15.297Z","heroImageId":null,"publishedAt":"2026-10-03T05:49:10.468Z"}', NULL, NULL, '2026-10-05 10:39:16');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4dz6b0008jp04wmh1v7yl', 'cmufezgon00001m9minlm53xg', 'CREATE', 'AdminUser', 'cmuv4dyte0006jp0487gqam0o', NULL, '{"name":"Kunal","role":"ADMIN","email":"kunalkhandelwal@gmail.com","status":"ACTIVE"}', NULL, NULL, '2026-10-05 10:41:42');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4f0m50003jq04311u8oat', 'cmuv4dyte0006jp0487gqam0o', 'LOGIN', 'AdminUser', 'cmuv4dyte0006jp0487gqam0o', NULL, NULL, NULL, NULL, '2026-10-05 10:42:30');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4ffz10005lh04fxwszwyd', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-05 10:42:50');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4jnx80006jq049da05hth', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"jkdfkhadsfkbnadskjnf","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-10-05 10:46:07');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuv4jwbk0009jq04v6upiwhu', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'SiteSetting', 'cmunvc9tz00001ms8vkvk5ni5', '{"location":"jkdfkhadsfkbnadskjnf","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', NULL, NULL, '2026-10-05 10:46:18');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw72yjk0001jp04s64y5spn', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Department', 'cmuruprjl00001majti2asox6', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"PUBLISHED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-05T10:39:15.297Z","heroImageId":null,"publishedAt":"2026-10-03T05:49:10.468Z"}', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"ARCHIVED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-06T04:44:51.982Z","heroImageId":null,"publishedAt":null}', NULL, NULL, '2026-10-06 04:44:53');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw80etx0001jq04x0avtm1w', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Department', 'cmuruprjl00001majti2asox6', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"ARCHIVED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-06T04:44:51.982Z","heroImageId":null,"publishedAt":null}', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"DRAFT","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-06T05:10:52.935Z","heroImageId":null,"publishedAt":null}', NULL, NULL, '2026-10-06 05:10:53');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw812ej0001l804zkz6hcdl', 'cmufezgon00001m9minlm53xg', 'UPDATE', 'Department', 'cmuruprjl00001majti2asox6', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"DRAFT","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-06T05:10:52.935Z","heroImageId":null,"publishedAt":null}', '{"id":"cmuruprjl00001majti2asox6","body":null,"name":"school of testing","slug":"school-of-testing","seoId":null,"status":"ARCHIVED","summary":"hkbeakjfbckjsdfjnsdfsd","createdAt":"2026-10-03T03:47:37.522Z","shortName":"tsting","sortOrder":0,"updatedAt":"2026-10-06T05:11:23.410Z","heroImageId":null,"publishedAt":null}', NULL, NULL, '2026-10-06 05:11:24');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw9dj3o0003jv04fdokkfj3', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-06 05:49:05');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw9f5uu0003kw04gm4pxxtc', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-06 05:50:21');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw9f9lp0007kw04pie0cach', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-06 05:50:26');
INSERT INTO `AuditLog` (`id`, `actorId`, `action`, `entityType`, `entityId`, `before`, `after`, `ipAddress`, `userAgent`, `createdAt`) VALUES ('cmuw9fk240003l504hxygdzco', 'cmufezgon00001m9minlm53xg', 'LOGIN', 'AdminUser', 'cmufezgon00001m9minlm53xg', NULL, NULL, NULL, NULL, '2026-10-06 05:50:40');

DROP TABLE IF EXISTS `ContactSubmission`;
CREATE TABLE "ContactSubmission" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "type" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "status" enum('NEW','IN_REVIEW','RESOLVED','SPAM') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NEW',
  "name" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "email" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "phone" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "subject" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "message" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "payload" json NOT NULL,
  "sourcePath" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ipAddress" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "userAgent" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  KEY "ContactSubmission_type_status_idx" ("type","status"),
  KEY "ContactSubmission_createdAt_idx" ("createdAt")
);


DROP TABLE IF EXISTS `ContentRevision`;
CREATE TABLE "ContentRevision" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "pageId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "snapshot" json NOT NULL,
  "note" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdById" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("id"),
  KEY "ContentRevision_pageId_idx" ("pageId"),
  KEY "ContentRevision_createdAt_idx" ("createdAt"),
  KEY "ContentRevision_createdById_fkey" ("createdById"),
  CONSTRAINT "ContentRevision_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ContentRevision_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `Department`;
CREATE TABLE "Department" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "name" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "shortName" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "summary" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "body" json DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sortOrder" int NOT NULL DEFAULT '0',
  "heroImageId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Department_slug_key" ("slug"),
  KEY "Department_status_sortOrder_idx" ("status","sortOrder"),
  KEY "Department_heroImageId_fkey" ("heroImageId"),
  KEY "Department_seoId_fkey" ("seoId"),
  CONSTRAINT "Department_heroImageId_fkey" FOREIGN KEY ("heroImageId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Department_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `Department` (`id`, `name`, `shortName`, `slug`, `summary`, `body`, `status`, `sortOrder`, `heroImageId`, `seoId`, `publishedAt`, `createdAt`, `updatedAt`) VALUES ('cmuruprjl00001majti2asox6', 'school of testing', 'tsting', 'school-of-testing', 'hkbeakjfbckjsdfjnsdfsd', NULL, 'ARCHIVED', 0, NULL, NULL, NULL, '2026-10-03 03:47:37', '2026-10-06 05:11:23');

DROP TABLE IF EXISTS `Download`;
CREATE TABLE "Download" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "category" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "description" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sortOrder" int NOT NULL DEFAULT '0',
  "mediaId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Download_slug_key" ("slug"),
  KEY "Download_category_status_sortOrder_idx" ("category","status","sortOrder"),
  KEY "Download_mediaId_fkey" ("mediaId"),
  CONSTRAINT "Download_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `Event`;
CREATE TABLE "Event" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "excerpt" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "body" json DEFAULT NULL,
  "startsAt" datetime(3) NOT NULL,
  "endsAt" datetime(3) DEFAULT NULL,
  "location" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Event_slug_key" ("slug"),
  KEY "Event_status_startsAt_idx" ("status","startsAt"),
  KEY "Event_seoId_fkey" ("seoId"),
  CONSTRAINT "Event_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `Event` (`id`, `title`, `slug`, `excerpt`, `body`, `startsAt`, `endsAt`, `location`, `status`, `seoId`, `publishedAt`, `createdAt`, `updatedAt`) VALUES ('cmus1e9me00001ms1685ixok5', 'adbasmndnmasbdnjksahdasdasda', 'test', 'dafadsgadgasdg', 'dsgsdgsdgsdgsdgsdg', '2026-10-03 06:54:00', '2026-10-04 06:54:00', 'NH-71, Naultha, Panipat, Haryana 132145', 'PUBLISHED', 'cmus1e9mg00011ms10w883csy', '2026-10-03 06:54:45', '2026-10-03 06:54:38', '2026-10-05 10:12:11');
INSERT INTO `Event` (`id`, `title`, `slug`, `excerpt`, `body`, `startsAt`, `endsAt`, `location`, `status`, `seoId`, `publishedAt`, `createdAt`, `updatedAt`) VALUES ('cmuv3du1f0000jm04d6tvekod', 'aszxcvbnm', 'testing', 'adfadsbmbfhksdaf', 'adsbfkhadsfkjadkjbf', '2026-10-05 10:12:00', '2026-10-06 10:12:00', 'NH-71, Naultha, Panipat, Haryana 132145', 'PUBLISHED', 'cmuv3du1f0001jm04k28bgj7q', '2026-10-05 10:13:35', '2026-10-05 10:13:35', '2026-10-05 10:13:35');
INSERT INTO `Event` (`id`, `title`, `slug`, `excerpt`, `body`, `startsAt`, `endsAt`, `location`, `status`, `seoId`, `publishedAt`, `createdAt`, `updatedAt`) VALUES ('cmuv3elth0004jm04ffdlqg13', 'kunal', 'kunal', 'dasbdbhkasbdas', 'asdbvashdfbahsdkbjdfas', '2026-10-05 10:13:00', '2026-10-06 10:13:00', 'NH-71, Naultha, Panipat, Haryana 132145', 'PUBLISHED', 'cmuv3elth0005jm04gk5n8he6', '2026-10-05 10:14:28', '2026-10-05 10:14:11', '2026-10-05 10:14:28');

DROP TABLE IF EXISTS `FacultyMember`;
CREATE TABLE "FacultyMember" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "departmentId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "name" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "designation" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "qualification" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "bio" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "email" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "phone" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "sortOrder" int NOT NULL DEFAULT '0',
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "portraitId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "FacultyMember_slug_key" ("slug"),
  KEY "FacultyMember_departmentId_idx" ("departmentId"),
  KEY "FacultyMember_status_sortOrder_idx" ("status","sortOrder"),
  KEY "FacultyMember_portraitId_fkey" ("portraitId"),
  CONSTRAINT "FacultyMember_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "FacultyMember_portraitId_fkey" FOREIGN KEY ("portraitId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `FacultyProgram`;
CREATE TABLE "FacultyProgram" (
  "facultyId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "programId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY ("facultyId","programId"),
  KEY "FacultyProgram_programId_fkey" ("programId"),
  CONSTRAINT "FacultyProgram_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "FacultyMember" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FacultyProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `GalleryAlbum`;
CREATE TABLE "GalleryAlbum" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "description" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sortOrder" int NOT NULL DEFAULT '0',
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "GalleryAlbum_slug_key" ("slug"),
  KEY "GalleryAlbum_status_sortOrder_idx" ("status","sortOrder")
);


DROP TABLE IF EXISTS `GalleryImage`;
CREATE TABLE "GalleryImage" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "albumId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "mediaId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "sortOrder" int NOT NULL DEFAULT '0',
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("id"),
  KEY "GalleryImage_albumId_sortOrder_idx" ("albumId","sortOrder"),
  KEY "GalleryImage_mediaId_fkey" ("mediaId"),
  CONSTRAINT "GalleryImage_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "GalleryAlbum" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "GalleryImage_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `HeroBanner`;
CREATE TABLE "HeroBanner" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "subtitle" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ctaLabel" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ctaHref" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "placement" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sortOrder" int NOT NULL DEFAULT '0',
  "mediaId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  KEY "HeroBanner_placement_status_sortOrder_idx" ("placement","status","sortOrder"),
  KEY "HeroBanner_mediaId_fkey" ("mediaId"),
  CONSTRAINT "HeroBanner_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `MediaAsset`;
CREATE TABLE "MediaAsset" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "fileName" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "storageKey" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "url" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "mimeType" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "sizeBytes" int NOT NULL,
  "width" int DEFAULT NULL,
  "height" int DEFAULT NULL,
  "altText" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "caption" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdById" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "MediaAsset_storageKey_key" ("storageKey"),
  KEY "MediaAsset_mimeType_idx" ("mimeType"),
  KEY "MediaAsset_createdAt_idx" ("createdAt"),
  KEY "MediaAsset_createdById_fkey" ("createdById"),
  CONSTRAINT "MediaAsset_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `NavigationItem`;
CREATE TABLE "NavigationItem" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "menuId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "parentId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "label" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "href" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PUBLISHED',
  "sortOrder" int NOT NULL DEFAULT '0',
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  KEY "NavigationItem_menuId_parentId_sortOrder_idx" ("menuId","parentId","sortOrder"),
  KEY "NavigationItem_parentId_fkey" ("parentId"),
  CONSTRAINT "NavigationItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "NavigationMenu" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "NavigationItem_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "NavigationItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `NavigationMenu`;
CREATE TABLE "NavigationMenu" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "key" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "label" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "NavigationMenu_key_key" ("key")
);


DROP TABLE IF EXISTS `NewsArticle`;
CREATE TABLE "NewsArticle" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "excerpt" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "body" json DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "NewsArticle_slug_key" ("slug"),
  KEY "NewsArticle_status_publishedAt_idx" ("status","publishedAt"),
  KEY "NewsArticle_seoId_fkey" ("seoId"),
  CONSTRAINT "NewsArticle_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `NewsArticle` (`id`, `title`, `slug`, `excerpt`, `body`, `status`, `seoId`, `publishedAt`, `createdAt`, `updatedAt`) VALUES ('cmurut7vd00031majmreyntyc', 'noadfoiajfoi', 'news', 'hjdabfkjadfa', 'ajfnjkanjfnajsnfoasnfikasjikfasjfsafasv', 'PUBLISHED', 'cmurut7ve00041majbqtqiwhf', '2026-10-05 10:10:42', '2026-10-03 03:50:18', '2026-10-05 10:11:12');

DROP TABLE IF EXISTS `Notice`;
CREATE TABLE "Notice" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "summary" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "body" json DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "expiresAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Notice_slug_key" ("slug"),
  KEY "Notice_status_publishedAt_idx" ("status","publishedAt"),
  KEY "Notice_seoId_fkey" ("seoId"),
  CONSTRAINT "Notice_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `Notice` (`id`, `title`, `slug`, `summary`, `body`, `status`, `seoId`, `publishedAt`, `expiresAt`, `createdAt`, `updatedAt`) VALUES ('cmurywnni00071maj67cqrabu', 'asdfghjkl', 'testing', 'dffghfkujhlihjli', 'bkhjkbkjkj', 'PUBLISHED', NULL, '2026-10-03 05:47:58', '2026-10-04 23:59:59', '2026-10-03 05:44:57', '2026-10-03 05:47:58');

DROP TABLE IF EXISTS `Page`;
CREATE TABLE "Page" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "template" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sections" json NOT NULL,
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdById" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "updatedById" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Page_slug_key" ("slug"),
  KEY "Page_status_idx" ("status"),
  KEY "Page_publishedAt_idx" ("publishedAt"),
  KEY "Page_seoId_fkey" ("seoId"),
  KEY "Page_createdById_fkey" ("createdById"),
  KEY "Page_updatedById_fkey" ("updatedById"),
  CONSTRAINT "Page_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Page_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Page_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "AdminUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `PlacementRecord`;
CREATE TABLE "PlacementRecord" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "year" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "content" json NOT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  KEY "PlacementRecord_status_year_idx" ("status","year")
);


DROP TABLE IF EXISTS `Program`;
CREATE TABLE "Program" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "departmentId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "name" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "level" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "duration" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "eligibility" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "overview" json DEFAULT NULL,
  "feeData" json DEFAULT NULL,
  "status" enum('DRAFT','PUBLISHED','ARCHIVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  "sortOrder" int NOT NULL DEFAULT '0',
  "heroImageId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "seoId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "publishedAt" datetime(3) DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "Program_slug_key" ("slug"),
  KEY "Program_departmentId_idx" ("departmentId"),
  KEY "Program_status_sortOrder_idx" ("status","sortOrder"),
  KEY "Program_heroImageId_fkey" ("heroImageId"),
  KEY "Program_seoId_fkey" ("seoId"),
  CONSTRAINT "Program_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Program_heroImageId_fkey" FOREIGN KEY ("heroImageId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Program_seoId_fkey" FOREIGN KEY ("seoId") REFERENCES "SeoMetadata" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `ProgramAlias`;
CREATE TABLE "ProgramAlias" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "programId" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "slug" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY ("id"),
  UNIQUE KEY "ProgramAlias_slug_key" ("slug"),
  KEY "ProgramAlias_programId_idx" ("programId"),
  CONSTRAINT "ProgramAlias_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS `SeoMetadata`;
CREATE TABLE "SeoMetadata" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "description" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "keywords" json DEFAULT NULL,
  "canonical" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ogTitle" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ogImage" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "noIndex" tinyint(1) NOT NULL DEFAULT '0',
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO `SeoMetadata` (`id`, `title`, `description`, `keywords`, `canonical`, `ogTitle`, `ogImage`, `noIndex`, `createdAt`, `updatedAt`) VALUES ('cmurut7ve00041majbqtqiwhf', 'ljfndajlnfadf', 'dfadfadfad', NULL, NULL, NULL, NULL, 0, '2026-10-03 03:50:18', '2026-10-05 10:11:12');
INSERT INTO `SeoMetadata` (`id`, `title`, `description`, `keywords`, `canonical`, `ogTitle`, `ogImage`, `noIndex`, `createdAt`, `updatedAt`) VALUES ('cmus1e9mg00011ms10w883csy', 'fdasfgadsfads', 'adfadfadsfg', NULL, NULL, NULL, NULL, 0, '2026-10-03 06:54:38', '2026-10-05 10:12:11');
INSERT INTO `SeoMetadata` (`id`, `title`, `description`, `keywords`, `canonical`, `ogTitle`, `ogImage`, `noIndex`, `createdAt`, `updatedAt`) VALUES ('cmuv3du1f0001jm04k28bgj7q', 'fadfads', 'description', NULL, NULL, NULL, NULL, 1, '2026-10-05 10:13:35', '2026-10-05 10:13:35');
INSERT INTO `SeoMetadata` (`id`, `title`, `description`, `keywords`, `canonical`, `ogTitle`, `ogImage`, `noIndex`, `createdAt`, `updatedAt`) VALUES ('cmuv3elth0005jm04gk5n8he6', 'asdbjkahsd', 'akhbdkhabs', NULL, NULL, NULL, NULL, 0, '2026-10-05 10:14:11', '2026-10-05 10:14:28');

DROP TABLE IF EXISTS `SiteSetting`;
CREATE TABLE "SiteSetting" (
  "id" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "key" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "value" json NOT NULL,
  "description" varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "createdAt" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "updatedAt" datetime(3) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "SiteSetting_key_key" ("key")
);

INSERT INTO `SiteSetting` (`id`, `key`, `value`, `description`, `createdAt`, `updatedAt`) VALUES ('cmunvc9tz00001ms8vkvk5ni5', 'contact', '{"location":"NH-71, Naultha, Panipat, Haryana 132145","emailPrimary":"info@geetauniversity.edu.in","phonePrimary":"+91 92787 68000","workingHours":"Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)","phoneSecondary":"+91 99960 00444","emailAdmissions":"admissions@geetauniversity.edu.in","locationDetails":"Gohana Road, Panipat (13 km from Panipat Junction Railway Station)"}', 'Public contact page details', '2026-09-30 08:54:02', '2026-10-05 10:46:17');

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE "_prisma_migrations" (
  "id" varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "checksum" varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "finished_at" datetime(3) DEFAULT NULL,
  "migration_name" varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  "logs" text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  "rolled_back_at" datetime(3) DEFAULT NULL,
  "started_at" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "applied_steps_count" int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY ("id")
);

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('973e5fd5-9efa-4c29-b947-439212f226ad', '31b0014c438fc4529ff650f7d00b3caff0c65d4f4b52955449959d7e647d2e4a', '2026-09-29 08:55:54', '20260929000000_mysql_init', '', NULL, '2026-09-29 08:55:54', '0');

