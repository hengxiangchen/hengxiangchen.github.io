(() => {
    function readLocal(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key) || '[]');
            return Array.isArray(value) ? value : [];
        } catch { return []; }
    }
    const deleted = new Set(readLocal('hency-blog-deleted-posts'));
    const bySlug = new Map();
    [...(window.HENCY_BLOG_POSTS || []), ...readLocal('hency-blog-posts')].forEach(post => {
        if (post && post.slug && !deleted.has(post.slug)) bySlug.set(post.slug, post);
    });
    const posts = [...bySlug.values()].filter(post => {
        const title = String(post.title || '').trim();
        return title && (title.toLowerCase() !== 'untitled post' ||
            [post.markdown, post.summary, post.tags].some(value => String(value || '').trim()));
    }).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    function postLink(post) {
        const link = document.createElement('a');
        link.href = `blog.html#${encodeURIComponent(post.slug)}`;
        link.textContent = post.title;
        return link;
    }
    function formatDate(value) {
        const date = /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null;
        return date && !Number.isNaN(date.getTime())
            ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
            : '';
    }
    const list = document.getElementById('cover-posts');
    posts.slice(0, 16).forEach(post => {
        const row = document.createElement('li');
        row.className = 'cover-post';
        const date = document.createElement('time');
        date.textContent = formatDate(post.date);
        if (date.textContent) date.dateTime = post.date;
        row.append(date, postLink(post));
        list.append(row);
    });
})();
