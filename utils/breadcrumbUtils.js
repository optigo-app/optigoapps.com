const findPathInContentMap = (contentMap, currentPath) => {
    if (!contentMap || !currentPath || typeof currentPath !== 'string') {
        return [{ name: 'Home', url: '/' }];
    }
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
        if (i === 0 && currentLevel && typeof currentLevel === 'object') {
            const sectionKey = Object.keys(currentLevel).find(key => {
                const titleStr = currentLevel[key]?.title || key;
                return typeof titleStr === 'string' && titleStr.toLowerCase().replace(/[^a-z0-9]+/g, '-') === segment.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            });
            if (sectionKey) {
                breadcrumbs.push({ name: sectionKey, url: `/${segment}` });
                currentLevel = currentLevel[sectionKey];
                found = true;
            }
        }

        // For subsequent levels, check arrays like industries, solutions, features
        if (!found && currentLevel && typeof currentLevel === 'object') {
            const arrayKey = ['industries', 'solutions', 'features'].find(k => Array.isArray(currentLevel[k]));
            if (arrayKey && Array.isArray(currentLevel[arrayKey])) {
                const item = currentLevel[arrayKey].find(
                    it => it && typeof it.url === 'string' && it.url.toLowerCase() === currentUrl.toLowerCase()
                );
                if (item) {
                    breadcrumbs.push({ name: item.name || item.title || segment, url: item.url });
                    currentLevel = item;
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
