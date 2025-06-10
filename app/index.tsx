import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContadorSimples() {
  const [contador, setContador] = useState(0);
  const [foiResetado, setFoiResetado] = useState(false);

  function aumentar() {
    setContador(contador + 1);
    setFoiResetado(false);
  }

  function diminuir() {
    setContador(contador - 1);
    setFoiResetado(false);
  }

  function resetar() {
    setContador(0);
    setFoiResetado(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}><strong>Contador App</strong></Text>

      <View style={styles.contadorWrapper}>
        <View style={styles.circulo}>
          <Text
            style={[
              styles.contador,
              contador < 0 ? styles.contadorNegativo
                : contador === 0 ? styles.contadorZerado
                  : null,
            ]}
          >
            {contador}
          </Text>
        </View>
        {foiResetado && <Text style={styles.reiniciado}>Contador reiniciado!</Text>}
      </View>

      <View style={styles.botoes}>
        <Botao texto="-" cor="#f44336" acao={diminuir} />
        <Botao texto="Reset" cor="#00bcd4" acao={resetar} desativado={contador === 0} />
        <Botao texto="+" cor="#4caf50" acao={aumentar} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}><strong>Aluno:</strong> Murilo Fontes</Text>
      </View>
    </View>
  );
}

function Botao({ texto, cor, acao, desativado = false }: { texto: string, cor: string, acao: () => void, desativado?: boolean; }) {
  return (
    <TouchableOpacity onPress={acao} disabled={desativado} style={[
      styles.botao,
      {
        backgroundColor: desativado ? '#ccc' : cor,
        opacity: desativado ? 0.6 : 1,
      },
    ]}>
      <Text style={styles.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 28,
    marginBottom: 30,
  },
  contadorWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circulo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  contador: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  contadorNegativo: {
    color: '#f44336',
  },
  contadorZerado: {
    color: '#00bcd4',
  },
  reiniciado: {
    marginTop: 10,
    color: '#888',
    fontSize: 16,
  },
  botoes: {
    flexDirection: 'row',
    gap: 20,
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 20,
  },
  footerText: {
    color: '#999',
    fontSize: 14,
  },
});
