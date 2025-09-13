import json
from deep_translator import GoogleTranslator

# Carregar JSON original (inglês)
with open("../public/json/verses.json", "r", encoding="utf-8") as f:
    data = json.load(f)
    
# Função recursiva para traduzir somente os campos de texto
def traduzir(obj):
    if isinstance(obj, dict):
        novo = {}
        for k, v in obj.items():
            if k in ["verseText", "mdText", "richText"]:
                novo[k] = {
                    "en": v,
                    "pt": GoogleTranslator(source="en", target="pt").translate(v)  # traduz para o português
                }
            else:
                novo[k] = traduzir(v)  # mantém outros campos
        return novo
    elif isinstance(obj, list):
        return [traduzir(i) for i in obj]
    else: 
        return obj
    
# Traduzir todo o JSON
traduzido = traduzir(data)

# Salvar o JSON bilíngue em public/json para usar no React
with open("../public/json/verse_bilingue.json", "w", encoding="utf-8") as f:
    json.dump(traduzido, f, ensure_ascii=False, indent=4)
    
print("✅ Tradução concluída! Arquivo salvo como verse_bilingue.json")
