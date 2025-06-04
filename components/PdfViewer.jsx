import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PdfViewer() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>THE BHARATIYA NYAYA SANHITA, 2023</Text>
        </View>
        
        <View style={styles.chapterBox}>
          <Text style={styles.sectionHeader}>ARRANGEMENT OF SECTIONS</Text>
        </View>

        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>CHAPTER I</Text>
          <Text style={styles.chapterTitle}>PRELIMINARY</Text>
          <Text style={styles.text}>1. Short title, commencement and application.</Text>
          <Text style={styles.text}>2. Definitions.</Text>
          <Text style={styles.text}>3. General explanations.</Text>
          <Text style={styles.text}>4. Punishments.</Text>
          <Text style={styles.text}>5. Commutation of sentence.</Text>
          <Text style={styles.text}>6. Fractions of terms of punishment.</Text>
        </View>

        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>CHAPTER II</Text>
          <Text style={styles.chapterTitle}>OF PUNISHMENTS</Text>
          <Text style={styles.text}>7. Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple.</Text>
          <Text style={styles.text}>8. Amount of fine, liability in default of payment of fine, etc.</Text>
          <Text style={styles.text}>9. Limit of punishment of offence made up of several offences.</Text>
          <Text style={styles.text}>10. Punishment of person guilty of one of several offences, judgment stating that it is doubtful of which.</Text>
          <Text style={styles.text}>11. Solitary confinement.</Text>
          <Text style={styles.text}>12. Limit of solitary confinement.</Text>
          <Text style={styles.text}>13. Enhanced punishment for certain offences after previous conviction.</Text>
        </View>

        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>CHAPTER III</Text>
          <Text style={styles.chapterTitle}>GENERAL EXCEPTIONS</Text>
          <Text style={styles.text}>14. Act done by a person bound, or by mistake of fact believing himself bound, by law.</Text>
          <Text style={styles.text}>15. Act of Judge when acting judicially.</Text>
          <Text style={styles.text}>16. Act done pursuant to judgment or order of Court.</Text>
          <Text style={styles.text}>17. Act done by a person justified, or by mistake of fact believing himself justified, by law.</Text>
          <Text style={styles.text}>18. Accident in doing a lawful act.</Text>
          <Text style={styles.text}>19. Act likely to cause harm, but done without criminal intent, and to prevent other harm.</Text>
          <Text style={styles.text}>20. Act of a child under seven years of age.</Text>
          <Text style={styles.text}>21. Act of a child above seven and under twelve years of age of immature understanding.</Text> 
          <Text style={styles.text}>22. Act of a person of unsound mind.  </Text>
          <Text style={styles.text}>23. Act of a person incapable of judgment by reason of intoxication caused against his will.</Text> 
          <Text style={styles.text}>24. Offence requiring a particular intent or knowledge committed by one who is intoxicated.</Text>
          <Text style={styles.text}>25. Act not intended and not known to be likely to cause death or grievous hurt, done by consent.</Text> 
          <Text style={styles.text}>26. Act not intended to cause death, done by consent in good faith for person's benefit. </Text>
          <Text style={styles.text}>27. Act done in good faith for benefit of child or person of unsound mind, by, or by consent of guardian.</Text> 
          <Text style={styles.text}>28. Consent known to be given under fear or misconception. </Text>
          <Text style={styles.text}>29. Exclusion of acts which are offences independently of harm caused.</Text> 
          <Text style={styles.text}>30. Act done in good faith for benefit of a person without consent. </Text>
          <Text style={styles.text}>31. Communication made in good faith. </Text>
          <Text style={styles.text}>32. Act to which a person is compelled by threats.</Text> 
          <Text style={styles.text}>33. Act causing slight harm.</Text>
          <Text style={styles.text}>34. Things done in private defence.</Text> 
          <Text style={styles.text}>35. Right of private defence of body and of property.</Text> 
          <Text style={styles.text}>36. Right of private defence against act of a person of unsound mind, etc.</Text> 
          <Text style={styles.text}>37. Acts against which there is no right of private defence. </Text>
          <Text style={styles.text}>38. When right of private defence of body extends to causing death. </Text>
          <Text style={styles.text}>39. When such right extends to causing any harm other than death. </Text>
          <Text style={styles.text}>40. Commencement and continuance of right of private defence of body. </Text>
          <Text style={styles.text}>41. When right of private defence of property extends to causing death. </Text>
          <Text style={styles.text}>42. When such right extends to causing any harm other than death. </Text>
          <Text style={styles.text}>43. Commencement and continuance of right of private defence of property.</Text>  
          <Text style={styles.text}>44. Right of private defence against deadly assault when there is risk of harm to innocent person</Text>
        </View>

        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>CHAPTER IV</Text>
          <Text style={styles.chapterTitle}>OF ABETMENT, CRIMINAL CONSPIRACY AND ATTEMPT</Text>
          <Text style={styles.text}>45.  Abetment of a thing. </Text>
          <Text style={styles.text}>46. Abettor. </Text>
          <Text style={styles.text}>47. Abetment in India of offences outside India. </Text>
          <Text style={styles.text}>48. Abetment outside India for offence in India. </Text>
          <Text style={styles.text}>49. Punishment of abetment if act abetted is committed in consequence and where no express provision is made for its punishment. </Text>
          <Text style={styles.text}>50. Punishment of abetment if person abetted does act with different intention from that of abettor. </Text>
          <Text style={styles.text}>51. Liability of abettor when one act abetted and different act done. </Text>
          <Text style={styles.text}>52. Abettor when liable to cumulative punishment for act abetted and for act done. </Text>
          <Text style={styles.text}>53. Liability of abettor for an effect caused by act abetted different from that intended by abettor. </Text>
          <Text style={styles.text}>54. Abettor present when offence is committed. </Text>
          <Text style={styles.text}>55. Abetment of offence punishable with death or imprisonment for life. </Text>
          <Text style={styles.text}>56. Abetment of offence punishable with imprisonment. </Text>
          <Text style={styles.text}>57. Abetting commission of offence by public or by more than ten persons. </Text>
          <Text style={styles.text}>58. Concealing design to commit offence punishable with death or imprisonment for life. </Text>
          <Text style={styles.text}>59. Public servant concealing design to commit offence which it is his duty to prevent. </Text>
          <Text style={styles.text}>60. Concealing design to commit offence punishable with imprisonment. </Text>
          <Text style={styles.text}>61. Criminal conspiracy.  </Text>
          <Text style={styles.text}>62. Punishment for attempting to commit offences punishable with imprisonment for life or other imprisonment.</Text>
        </View>

        <View style={styles.chapterBox}>
          <Text style={styles.chapterHeader}>CHAPTER V</Text>
          <Text style={styles.chapterTitle}>OF OFFENCES AGAINST WOMAN AND CHILD</Text>
          <Text style={styles.text}>63. Rape. </Text>
          <Text style={styles.text}>64. Punishment for rape. </Text>
          <Text style={styles.text}>65. Punishment for rape in certain cases. </Text>
          <Text style={styles.text}>66. Punishment for causing death or resulting in persistent vegetative state of victim. </Text>
          <Text style={styles.text}>67. Sexual intercourse by husband upon his wife during separation. </Text>
          <Text style={styles.text}>68. Sexual intercourse by a person in authority.  </Text>
          <Text style={styles.text}>69. Sexual intercourse by employing deceitful means, etc.</Text> 
          <Text style={styles.text}>70. Gang rape. </Text>
          <Text style={styles.text}>71. Punishment for repeat offenders. </Text>
          <Text style={styles.text}>72. Disclosure of identity of victim of certain offences, etc. </Text>
          <Text style={styles.text}>73. Printing or publishing any matter relating to Court proceedings without permission. </Text> 
          <Text style={styles.text}>74. Assault or use of criminal force to woman with intent to outrage her modesty. </Text>
          <Text style={styles.text}>75. Sexual harassment. </Text>
          <Text style={styles.text}>76. Assault or use of criminal force to woman with intent to disrobe. </Text>
          <Text style={styles.text}>77. Voyeurism. </Text>
          <Text style={styles.text}>78. Stalking. </Text>
          <Text style={styles.text}>79. Word, gesture or act intended to insult modesty of a woman.  </Text>
          <Text style={styles.text}>80. Dowry death. </Text>
          <Text style={styles.text}>81. Cohabitation caused by man deceitfully inducing belief of lawful marriage. </Text>
          <Text style={styles.text}>82. Marrying again during lifetime of husband or wife. </Text>
          <Text style={styles.text}>83. Marriage ceremony fraudulently gone through without lawful marriage. </Text>
          <Text style={styles.text}>84. Enticing or taking away or detaining with criminal intent a married woman. </Text>
          <Text style={styles.text}>85. Husband or relative of husband of a woman subjecting her to cruelty. </Text>
          <Text style={styles.text}>86. Cruelty defined. </Text>
          <Text style={styles.text}>87. Kidnapping, abducting or inducing woman to compel her marriage, etc.  </Text>
          <Text style={styles.text}>88. Causing miscarriage. </Text>
          <Text style={styles.text}>89. Causing miscarriage without woman's consent. </Text>
          <Text style={styles.text}>90. Death caused by act done with intent to cause miscarriage. </Text>
          <Text style={styles.text}>91. Act done with intent to prevent child being born alive or to cause to die after birth. </Text>
          <Text style={styles.text}>92. Causing death of quick unborn child by act amounting to culpable homicide.  </Text>
          <Text style={styles.text}>93. Exposure and abandonment of child under twelve years of age, by parent or person having care of it. </Text>
          <Text style={styles.text}>94. Concealment of birth by secret disposal of dead body.  </Text>
          <Text style={styles.text}>95. Hiring, employing or engaging a child to commit an offence. </Text>
          <Text style={styles.text}>96. Procuration of child. </Text>
          <Text style={styles.text}>97. Kidnapping or abducting child under ten years of age with intent to steal from its person. </Text>
          <Text style={styles.text}>98. Selling child for purposes of prostitution, etc. </Text>
          <Text style={styles.text}>99. Buying child for purposes of prostitution, etc.</Text>
        </View>

        {/* Add more chapters as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  chapterBox: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  chapterHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginVertical: 4,
  },
});
