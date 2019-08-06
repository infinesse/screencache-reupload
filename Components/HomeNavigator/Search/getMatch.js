const isEmpty = textContent => !textContent || textContent.length == 0;
const allMatch = () => true;

export default search => {
    // Search keywords may be separated by space, colon, semicolon, comma, period, or dash
    const patterns = search
        .split(/[\s;:\.,-]+/)
        .filter(keyword => keyword.length)
        .map(keyword => new RegExp(keyword, 'i'));

    return patterns.length === 0
        // No search criteria returns everything
        ? allMatch
        // Search text content of each item
        : ({ textContent }) => (
            isEmpty(textContent)
                // Never return blank items from search
                ? false
                // Select items where text content matches any keyword
                : patterns.reduce(
                    (match, pattern) => (
                        match ||
                        textContent.search(pattern) !== -1
                    ),
                    false));
};
