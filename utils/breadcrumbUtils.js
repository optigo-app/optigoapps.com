const findPathInContentMap = (contentMap, currentPath) => {
    const cleanPath = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
    const segments = cleanPath.split('/').filter(Boolean);

    const breadcrumbs = [{ name: 'Home', url: '/' }];

    if (segments.length === 0) return breadcrumbs;

    let currentLevel = contentMap;

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const currentUrl = `/${segments.slice(0, i + 1).join('/')}`;
        let found = false;

        // First, try to match top-level sections
        if (i === 0) {
            const sectionKey = Object.keys(currentLevel).find(
                key => currentLevel[key].title.toLowerCase().replace(/\s+/g, '-') === segment
            );
            if (sectionKey) {
                breadcrumbs.push({ name: currentLevel[sectionKey].title, url: `/${segment}` });
                currentLevel = currentLevel[sectionKey];
                found = true;
            }
        }

        // For subsequent levels, check arrays like industries, solutions, features
        if (!found) {
            const arrayKey = ['industries', 'solutions', 'features'].find(k => Array.isArray(currentLevel[k]));
            if (arrayKey) {
                const item = currentLevel[arrayKey].find(
                    it => it.url.toLowerCase() === currentUrl.toLowerCase()
                );
                if (item) {
                    breadcrumbs.push({ name: item.name, url: item.url });
                    currentLevel = item; // in case there is nested array, not needed now
                    found = true;
                }
            }
        }

        // Fallback: if still not found, use segment as name
        if (!found) {
            breadcrumbs.push({
                name: segment
                    .split('-')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' '),
                url: currentUrl
            });
        }
    }

    return breadcrumbs;
};

export { findPathInContentMap };
