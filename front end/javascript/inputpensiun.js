<script>
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = toggle.closest('.dropdown');

      // Close others
      document.querySelectorAll('.dropdown.open').forEach(drop => {
        if (drop !== parent) drop.classList.remove('open');
      });

      // Toggle current
      parent.classList.toggle('open');
    });
  });

  // Hide all dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(drop => {
      drop.classList.remove('open');
    });
  });
</script>
