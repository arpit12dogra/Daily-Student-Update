import { PrismaClient, Role, Category, PostStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create or update Admin and Editor accounts
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD || "Admin@123456";
  const editorPassword = process.env.EDITOR_INITIAL_PASSWORD || "Editor@123456";

  const adminHash = await bcrypt.hash(adminPassword, 10);
  const editorHash = await bcrypt.hash(editorPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: "arpit@studentupdates.com" },
    update: {},
    create: {
      name: "Arpit Dogra",
      email: "arpit@studentupdates.com",
      passwordHash: adminHash,
      role: Role.ADMIN,
      isActive: true,
    },
  });

  const editor = await prisma.user.upsert({
    where: { email: "editor@studentupdates.com" },
    update: {},
    create: {
      name: "Editorial Partner",
      email: "editor@studentupdates.com",
      passwordHash: editorHash,
      role: Role.EDITOR,
      isActive: true,
    },
  });

  console.log(`Users seeded: Admin (${admin.email}), Editor (${editor.email})`);

  // 2. Create sample development posts
  const now = new Date();
  const subDays = (d: number) => new Date(now.getTime() - d * 24 * 60 * 60 * 1000);
  const addDays = (d: number) => new Date(now.getTime() + d * 24 * 60 * 60 * 1000);

  const samplePosts = [
    {
      title: "HPPSC Himachal Pradesh Administrative Services (HPAS) 2026 Notification Out",
      slug: "hppsc-hpas-notification-2026",
      summary:
        "Himachal Pradesh Public Service Commission invites applications for Administrative Services exam. Check eligibility, syllabus, and apply online before last date.",
      content: `## HPPSC HPAS 2026 Examination

The Himachal Pradesh Public Service Commission has released the official recruitment notification for the Himachal Pradesh Administrative Services combined competitive examination.

### Key Highlights:
- **Total Posts:** 24
- **Pay Scale:** Level 18 as per HP Govt rules
- **Educational Qualification:** Bachelor's degree from a recognised University
- **Age Limit:** 21 to 35 years (relaxation for reserved categories)

Candidates are advised to read the official notification carefully before submitting the online recruitment application (ORA).`,
      category: Category.GOVT_JOB,
      state: "Himachal Pradesh",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(2),
      lastDate: addDays(20),
      officialUrl: "http://www.hppsc.hp.gov.in",
      createdById: admin.id,
    },
    {
      title: "HPU Shimla PG Entrance Exams 2026 Schedule & Application Window",
      slug: "hpu-shimla-pg-entrance-exams-2026",
      summary:
        "Himachal Pradesh University announces entrance examination dates for MA, MSc, MCom, and MBA admissions for academic session 2026-27.",
      content: `## HPU Shimla Admissions 2026

Admissions to various postgraduate degree programs at Himachal Pradesh University, Summer Hill, Shimla will be made based on competitive entrance tests.

### Important Details:
- Entrance tests will be conducted across multiple examination centers in HP.
- Admit cards will be available 1 week prior to the examination.
- Fee concessions apply for bonafide Himachali students under relevant categories.`,
      category: Category.EXAM,
      state: "Himachal Pradesh",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(5),
      lastDate: addDays(12),
      officialUrl: "https://hpuniv.ac.in",
      createdById: editor.id,
    },
    {
      title: "UPSC Civil Services Prelims 2026 Registration Last Date Approaching",
      slug: "upsc-cse-prelims-2026-last-date",
      summary:
        "Closing soon: Union Public Service Commission CSE Preliminary examination 2026 application form closes in 2 days. Apply via OTR portal.",
      content: `## UPSC CSE Prelims 2026

Candidates must complete their One Time Registration (OTR) on the official UPSC portal to submit applications for the Civil Services Preliminary exam.

Do not wait until the final hours to avoid server congestion.`,
      category: Category.GOVT_JOB,
      state: "All India",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(1),
      lastDate: addDays(2), // Closing soon badge test!
      officialUrl: "https://upsconline.nic.in",
      createdById: admin.id,
    },
    {
      title: "National Scholarship Portal (NSP) Post-Matric Scholarships 2026",
      slug: "national-scholarship-portal-post-matric-2026",
      summary:
        "Fresh and renewal applications are open on NSP for Central and State sponsored post-matric scholarship schemes.",
      content: `## National Scholarship Portal 2026

Eligible students pursuing higher education can apply for central and state minority, SC, ST, and OBC scholarship schemes through the National Scholarship Portal. Ensure Aadhaar is linked to your active bank account.`,
      category: Category.SCHOLARSHIP,
      state: "All India",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(15),
      lastDate: addDays(45),
      officialUrl: "https://scholarships.gov.in",
      createdById: editor.id,
    },
    {
      title: "Student PG & Single Room Available Near HPU Summer Hill, Shimla",
      slug: "student-pg-single-room-summer-hill-shimla",
      summary:
        "Furnished single and sharing rooms available for college students near Summer Hill. Includes Wi-Fi, 24-hr water, and geyser facility.",
      content: `## Accommodation Details:
- **Location:** Summer Hill, within 7 minutes walking distance to HPU campus.
- **Rent:** Rs. 4,500/month (including electricity and water charges).
- **Facilities:** Geyser, Wi-Fi, study table, bed, shared kitchen access.
- **Contact:** Check with local caretaker at campus news board.`,
      category: Category.ROOM_PG,
      state: "Himachal Pradesh",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(3),
      lastDate: null,
      officialUrl: null,
      meta: { rent: 4500, contact: "Available on request" },
      createdById: admin.id,
    },
    {
      title: "HPU B.Ed 1st Semester Results Declared — Check Scorecard",
      slug: "hpu-bed-1st-semester-results-declared",
      summary:
        "Himachal Pradesh University has declared the result of B.Ed first semester examination held in Jan/Feb. Download scorecard via student portal.",
      content: `Students can log in to the HPU examination portal using their registration number and date of birth to download their provisional marksheet.`,
      category: Category.RESULT,
      state: "Himachal Pradesh",
      status: PostStatus.PUBLISHED,
      publishedAt: subDays(45), // >30 days old for testing ARCHIVED behavior!
      archivedAt: subDays(15),
      lastDate: subDays(40), // Expired badge test!
      officialUrl: "https://nstudent.hpushimla.in",
      createdById: editor.id,
    },
  ];

  for (const post of samplePosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  console.log(`Seeded ${samplePosts.length} sample posts successfully.`);
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

