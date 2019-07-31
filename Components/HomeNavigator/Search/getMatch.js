export default search => {
    // Search keywords may be separated by space, colon, semicolon, comma, period, or dash
    const keywords = search.split(/[\s;:\.,-]+/);

    return item => {
        // No search criteria - everything matches
        if (!search || search.length === 0)
            return true;

        // Blank items - never match
        if (!item.textContent || item.textContent.length === 0)
            return false;

        // Search for each keyword separately
        return keywords
            .reduce(
                (matches, keyword) => (
                    matches ||
                    item.textContent.search(new RegExp(keyword, 'i')) !== -1
                ),
                false);
    };
};
