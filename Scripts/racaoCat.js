const racoesCat = [
    { id: 0, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenSalmão.png', descricao: 'Ração Seca PremieR Pet Golden Gatos Adultos Salmão' },
    { id: 1, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenFrango.png', descricao: 'Ração Seca PremieR Pet Golden Gatos Adultos Frango' },
    { id: 2, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenCarne.png', descricao: 'Ração Seca PremieR Pet Golden Gatos Adultos Carne' },
    { id: 3, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenCastradoSalmão.png', descricao: 'Ração Seca PremieR Pet Golden Salmão para Gatos Castrados' },
    { id: 4, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenCastradoFrango.png', descricao: 'Ração Seca PremieR Pet Golden Frango para Gatos Castrados' },
    { id: 5, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenCastradoCarne.png', descricao: 'Ração Seca PremieR Pet Golden Carne para Gatos Castrados' },
    { id: 6, marca: 'PremierPet', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Premier_Logo.png', img: 'Imagens/Gato/GoldenFilhote.png', descricao: 'Ração Seca PremieR Pet Golden Frango para Gatos Filhotes' },
    { id: 7, marca: 'Friskies', precoKG: 17.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Purina.png', img: 'Imagens/Gato/FriskiesPeixe.png', descricao: 'Ração Seca Nestlé Purina Friskies Peixes & Frutos do Mar para Gatos Adultos' },
    { id: 8, marca: 'Friskies', precoKG: 17.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Purina.png', img: 'Imagens/Gato/FriskiesMixCarne.png', descricao: 'Ração Seca Nestlé Purina Friskies Mix de Carnes para Gatos Adultos' },
    { id: 9, marca: 'Friskies', precoKG: 17.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Purina.png', img: 'Imagens/Gato/FriskiesFrango.png', descricao: 'Ração Seca Nestlé Purina Friskies Frango para Gatos Adultos' },
    { id: 10, marca: 'Friskies', precoKG: 17.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Purina.png', img: 'Imagens/Gato/FriskiesFilhote.png', descricao: 'Ração Seca Nestlé Purina Friskies Frango para Gatos Filhotes' },
    { id: 11, marca: 'Whiskas', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Whiskas.png', img: 'Imagens/Gato/WhiskasPeixe.png', descricao: 'Ração Whiskas Peixe para Gatos Adultos' },
    { id: 12, marca: 'Whiskas', precoKG: 18.00, precoSaco: 200.00, logo: 'Imagens/Marcas/Whiskas.png', img: 'Imagens/Gato/WhiskasCarne.png', descricao: 'Ração Whiskas Carne para Gatos Adultos' },
    { id: 13, marca: 'BillyCat', precoKG: 10.00, precoSaco: 200.00, logo: '', img: 'Imagens/Gato/BillycatSalmão.png', descricao: 'Ração Seca Billycat Select Salmão para Gatos Adultos' },
    { id: 14, marca: 'BillyCat', precoKG: 10.00, precoSaco: 200.00, logo: '', img: 'Imagens/Gato/BillycatMix.png', descricao: 'Ração Seca Billycat Select Mix para Gatos Adultos' },
   

]

const sacheCat = [
    { id: 0, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Whiskas Atum.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Úmida Whiskas Sachê Atum ao Molho para Gatos Adultos' },
    { id: 1, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Whiskas Carne.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Úmida Whiskas Sachê Carne ao Molho para Gatos Adultos' },
    { id: 2, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Whiskas Frango.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Úmida Whiskas Sachê Frango ao Molho para Gatos Adultos' },
    { id: 3, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Whiskas Filhote Frango.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Úmida Whiskas Sachê Frango ao Molho para Gatos  Filhotes' },
    { id: 4, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Whiskas Filhote Carne.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Úmida Whiskas Sachê Carne ao Molho para Gatos A Filhotes' }, 
    { id: 5, marca: 'Whiskas', preco: 2.50, img: 'Imagens/Gato/Saches/Friskies Salmão.png', logo: 'Imagens/Marcas/Whiskas.png', descricao: 'Ração Nestlé Purina Friskies Sachê Salmão ao Molho para Gatos  Adultos' }, 
      
]