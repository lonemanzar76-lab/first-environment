 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 3af36fe296ac168d29a2bc28603074ca2cf1a320..b15df5e297874e20a085735dd8ae303a6abdc955 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,15 @@
-# first-environment
-This repository contains a student project aimed at promoting environmental awareness and cleanliness.
+# .math buddy (Class 10 CBSE)
+
+A friendly, student-first learning app concept for Class 10 CBSE Maths. It focuses on clear explanations, formulas, solved examples, a simple login for students, and a dedicated doubt corner so students without a textbook can still learn every chapter confidently.
+
+## What's inside
+- Chapter-wise CBSE Class 10 Maths coverage
+- Formula cards with quick usage tips
+- Step-by-step solved examples
+- Doubt submission section for help and revision
+
+## Run locally
+```bash
+python -m http.server 8000
+```
+Then open `http://localhost:8000` in your browser.
 
EOF
)
