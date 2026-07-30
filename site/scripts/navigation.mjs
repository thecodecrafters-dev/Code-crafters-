const ROUTE_SECTIONS = new Map([
    ["/about-us", "#about-us"],
    ["/services", "#services"],
    ["/contact", "#contact"],
]);

const UNAVAILABLE_ROUTES = new Set(["/projects"]);
const PLACEHOLDER_SOCIALS = new Set([
    "https://www.instagram.com/accounts/login/?hl=en",
    "https://www.linkedin.com/login",
    "https://dribbble.com/",
    "https://www.behance.net/",
]);

function normalizedPath(pathname) {
    return pathname.replace(/\/+$/, "") || "/";
}

function sectionFor(anchor) {
    const href = anchor.getAttribute("href");
    if (!href) return null;

    let url;
    try {
        url = new URL(href, window.location.href);
    } catch {
        return null;
    }

    if (url.origin !== window.location.origin) return null;

    const mappedSection = ROUTE_SECTIONS.get(normalizedPath(url.pathname));
    if (mappedSection) return mappedSection;

    if (normalizedPath(url.pathname) === "/" && url.hash) {
        return document.getElementById(url.hash.slice(1)) ? url.hash : null;
    }

    return null;
}

function normalizeAnchor(anchor) {
    const href = anchor.getAttribute("href");
    if (!href) return;

    let url;
    try {
        url = new URL(href, window.location.href);
    } catch {
        anchor.removeAttribute("href");
        anchor.setAttribute("aria-disabled", "true");
        return;
    }

    if (PLACEHOLDER_SOCIALS.has(url.href)) {
        anchor.hidden = true;
        anchor.removeAttribute("href");
        anchor.setAttribute("aria-hidden", "true");
        anchor.setAttribute("tabindex", "-1");
        return;
    }

    if (
        url.origin === window.location.origin
        && (
            UNAVAILABLE_ROUTES.has(normalizedPath(url.pathname))
            || url.hash === "#:vPXJMDuCq"
        )
    ) {
        anchor.removeAttribute("href");
        anchor.setAttribute("aria-disabled", "true");
        anchor.setAttribute("tabindex", "-1");
        return;
    }

    const section = sectionFor(anchor);
    if (section && href !== `./${section}`) {
        anchor.setAttribute("href", `./${section}`);
    }
}

function normalizeNavigation(root = document) {
    root.querySelectorAll?.("a[href]").forEach(normalizeAnchor);
}

document.addEventListener(
    "click",
    (event) => {
        if (
            event.defaultPrevented
            || event.button !== 0
            || event.metaKey
            || event.ctrlKey
            || event.shiftKey
            || event.altKey
        ) {
            return;
        }

        const anchor = event.target.closest?.("a[href]");
        if (!anchor || anchor.target === "_blank") return;

        const section = sectionFor(anchor);
        if (!section) return;

        const target = document.getElementById(section.slice(1));
        if (!target) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        window.history.pushState(null, "", section);
        target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            block: "start",
        });
    },
    true,
);

normalizeNavigation();

new MutationObserver((records) => {
    for (const record of records) {
        for (const node of record.addedNodes) {
            if (!(node instanceof Element)) continue;
            if (node.matches("a[href]")) normalizeAnchor(node);
            normalizeNavigation(node);
        }
    }
}).observe(document.documentElement, {
    childList: true,
    subtree: true,
});
