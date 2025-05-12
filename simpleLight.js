const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    loginBtn.addEventListener('click', () => {
      loginModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
      loginModal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    // Close modal on clicking outside modal content
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Close modal on pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
        loginModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });