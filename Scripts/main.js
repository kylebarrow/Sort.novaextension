
exports.activate = ()=> {}
exports.deactivate = ()=> {}

nova.commands.register('sort.sortSelection', (editor) => {
    
    const ranges = editor.selectedRanges;

    for (const r of ranges) {
        const text = editor.getTextInRange(r);
        const texts = text.split('\n');
        
        const sorted = texts.sort((a, b) => {
            // Provides line sorting with support for numbers, case sensitive (a ≠ b, a = á, a ≠ A)
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
            return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'case'});
        });
        
        editor.edit((e) => {
            e.replace(r, sorted.join('\n'));
        });
    } 
});
