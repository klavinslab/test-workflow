var config = {

  tagline: "The Laboratory</br>Operating System",
  documentation_url: "http://localhost:4000/aquarium",
  title: "Test Workflow",
  navigation: [

    {
      category: "Overview",
      contents: [
        { name: "Introduction", type: "local-md", path: "README.md" },
        { name: "About this Workflow", type: "local-md", path: "ABOUT.md" },
        { name: "License", type: "local-md", path: "LICENSE.md" },
        { name: "Issues", type: "external-link", path: 'https://github.com/klavinslab/test-workflow/issues' }
      ]
    },

    

      {

        category: "Operation Types",

        contents: [

          
            {
              name: 'Make Widget Aliquot',
              path: 'operation_types/Make_Widget_Aliquot' + '.md',
              type: "local-md"
            },
          

        ]

      },

    

    

      {

        category: "Libraries",

        contents: [

          
            {
              name: 'WidgetLib',
              path: 'libraries/WidgetLib' + '.html',
              type: "local-webpage"
            },
          

        ]

    },

    

    
      { category: "Sample Types",
        contents: [
          
            {
              name: 'Widget',
              path: 'sample_types/Widget'  + '.md',
              type: "local-md"
            },
          
        ]
      },
      { category: "Containers",
        contents: [
          
            {
              name: 'Widget Aliquot',
              path: 'object_types/Widget_Aliquot'  + '.md',
              type: "local-md"
            },
          
            {
              name: 'Widget Stock',
              path: 'object_types/Widget_Stock'  + '.md',
              type: "local-md"
            },
          
        ]
      }
    

  ]

};
