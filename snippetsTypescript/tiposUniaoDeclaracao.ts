let minhaIdade: any;
minhaIdade = 46;
minhaIdade = "46"

if (typeof minhaIdade == "string") {
    console.log(parseInt(minhaIdade) * 2);
} else if (typeof minhaIdade == "number") {
    alert(minhaIdade * 2);
}