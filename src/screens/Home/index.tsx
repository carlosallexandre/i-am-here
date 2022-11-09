import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [newParticipant, setNewParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    if (!newParticipant.length) return;

    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante existe",
        `Já existe um participante ${newParticipant} na lista`
      );
    }

    setParticipants((prevState) => [...prevState, newParticipant]);
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim, remover",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participantName) => participantName !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do envento</Text>

      <Text style={styles.eventDate}>Segunda, 4 de novembro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={newParticipant}
          onChangeText={setNewParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item: participant }) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyTextList}>
            Ainda não possui nenhum participante? Adicione o primeiro a lista de
            presença.
          </Text>
        }
      />
    </View>
  );
}
