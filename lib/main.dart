
import 'package:flutter/material.dart';

void main() {
  runApp(CarteEtudiant());
}

class CarteEtudiant extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey[200],
        appBar: AppBar(
          title: Text('Carte Etudiant'),
          backgroundColor: Colors.teal,
          foregroundColor: Colors.white,
          centerTitle: true,
        ),

        body: Center(
          child: Container(
            margin: EdgeInsets.all(20),
            child: Card(
              elevation: 6,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              child: Padding(
                padding: EdgeInsets.all(16),

                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [

                    // Colonne gauche : Photo
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        CircleAvatar(
                          radius: 55,
                          backgroundImage: NetworkImage(
                            'https://picsum.photos/200',
                          ),
                        ),
                        SizedBox(height: 10),
                        Text(
                          'Etudiante',
                          style: TextStyle(
                            color: Colors.teal,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),

                    SizedBox(width: 20),

                    // Colonne droite : Informations
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Wiem Manai',
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            ),
                          ),

                          SizedBox(height: 8),

                          Row(
                            children: [
                              Icon(
                                Icons.school,
                                color: Colors.teal,
                                size: 20,
                              ),
                              SizedBox(width: 6),
                              Expanded(
                                child: Text('Business Computing'),
                              ),
                            ],
                          ),

                          SizedBox(height: 8),

                          Row(
                            children: [
                              Icon(
                                Icons.computer,
                                color: Colors.teal,
                                size: 20,
                              ),
                              SizedBox(width: 6),
                              Expanded(
                                child: Text('Specialite : E-Business'),
                              ),
                            ],
                          ),

                          SizedBox(height: 8),

                          Row(
                            children: [
                              Icon(
                                Icons.email,
                                color: Colors.teal,
                                size: 20,
                              ),
                              SizedBox(width: 6),
                              Expanded(
                                child: Text('wiem@example.com'),
                              ),
                            ],
                          ),

                          SizedBox(height: 12),

                          Container(
                            padding: EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: Colors.teal,
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              'Etudiante',
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
