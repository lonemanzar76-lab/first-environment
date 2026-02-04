 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..0a536e6950b6d8abc87707b284b17614e07b2199
--- /dev/null
+++ b/script.js
@@ -0,0 +1,11 @@
+const formulas = document.querySelectorAll(".formula");
+const tip = document.querySelector("#formula-tip");
+
+formulas.forEach((button) => {
+  button.addEventListener("click", () => {
+    formulas.forEach((item) => item.classList.remove("active"));
+    button.classList.add("active");
+    const message = button.dataset.tip || "Formula tip is coming soon.";
+    tip.textContent = `Tip: ${message}`;
+  });
+});
 
EOF
)
