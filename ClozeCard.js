
//Constructor for new ClozeCard 

function ClozeCard (text, cloze) {
    this.type = "cloze"
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "....");  
}

module.exports = ClozeCard;

